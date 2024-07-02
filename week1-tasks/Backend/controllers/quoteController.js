const quoteModel = require("../models/quoteMode");
const userModel = require("../models/userModel");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

module.exports.addQuote=catchAsync(async(req,res,next)=>{
    const {body,name}=req.body;
    if(body===undefined || body=="" || name===undefined) throw new ExpressError("Please Write Complete Message",404);
    const quote=new quoteModel({body,name,author:req.user_id});
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
    }])
    await userModel.populate(quote,{path:'author'})
    if(!quote) throw ExpressError("Quote Not Found",404)
    res.status(200).json({
       success:true,
       quote:{
        body:quote[0].body,
        author:quote[0].author.username,
        name:quote[0].name,
       },
    })
})

module.exports.getQuotesByName=catchAsync(async (req,res,next)=>{
    const {name}=req.params;
    console.log(name);
    const quotes=await quoteModel.find({name:name});
    console.log(quotes);
    if(!quotes) throw  new ExpressError("User Not Found",404);
    res.status(200).json({
        success:true,
        quotes
    })
})
