const quoteModel = require("../models/quoteMode");
const userModel = require("../models/userModel");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

module.exports.addQuote=catchAsync(async(req,res,next)=>{
    const {body}=req.body;
    if(!body) throw ExpressError({message:"Please Write Complete Message", status:404});
    const quote=new quoteModel({body,author:req.user_id});
    const user= await userModel.findById(req.user_id);
    user.quotes.push(quote._id);
    await user.save();
    await quote.save();
    res.status(200).json({
        success:true,
        message:"Quote Added Successfully",
    })
})

module.exports.getRandom=catchAsync(async (req,res,next)=>{
    const quote=await quoteModel.aggregate([{
        $sample:{size:1}
    }]);
    if(!quote) throw ExpressError({message:"Quote Not Found",status:404})
    res.status(200).json({
       success:true,
       quote,
    })
})
