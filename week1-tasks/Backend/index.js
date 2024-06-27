const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const userRouter=require('./routes/userRoute')
const quoteRouter=require('./routes/quoteRoute')

const app=express();
app.listen(3000,()=>{
    console.log("listening");
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("Database Connected");
})

app.use('/user',userRouter);
app.use('/quote',quoteRouter);
app.use((error,req,res,next)=>{
    console.log(error);
    res.json({
        message:error.message
    })
})

