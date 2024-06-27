const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

const isLoggedin=catchAsync(async(req,res,next)=>{
    const header=req.headers.authorization
    if(!header && !header.startsWith('Bearer ')) throw ExpressError({message:"Please Login first",status:403});
    const token=header.split(' ')[1];
    const decoded=jwt.verify(token,process.env.JWTSECRET);
    req.user_id=decoded.user_id;
    next();
})
module.exports=isLoggedin;