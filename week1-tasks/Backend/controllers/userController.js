const catchAsync=require('../utils/catchAsync')
const userModel=require('../models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const ExpressError = require('../utils/ExpressError');

module.exports.registerUser=catchAsync(async (req,res,next)=>{
    const{username,password}=req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    console.log(hashedPassword);
    const user=new userModel({username,password:hashedPassword});
    await user.save();
    const user_id=user._id;
    const token=jwt.sign({user_id},process.env.JWTSECRET);
    res.status(201).json({
        success:true,
        message:"User Created Successfully",
        user:{
            _id:user_id,
            username,
        },
        token,
    })
})
module.exports.loginUser=catchAsync(async (req,res,next)=>{
    const{username,password}=req.body;
    const user=await userModel.findOne({username})
    console.log(user);
    if(!user) throw new ExpressError("invalid username or password",404);
    const validPassword=bcrypt.compareSync(password,user.password);
    if(!validPassword) throw new ExpressError("invalid username or password",404);
    const user_id=user._id;
    const token=jwt.sign({user_id},process.env.JWTSECRET);
    res.status(201).json({
        success:true,
        message:"User Loggedin Successfully",
        user:{
            _id:user_id,
            username,
        },
        token,
    })
})

