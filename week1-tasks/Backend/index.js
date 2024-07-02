const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const userRouter=require('./routes/userRoute')
const quoteRouter=require('./routes/quoteRoute')
const cors=require('cors');
const app=express();
app.listen(3000,()=>{
    console.log("listening");
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("Database Connected");
})

app.use('/user',userRouter);
app.use('/quote',quoteRouter);
app.use((error,req,res,next)=>{
    console.log(error);
    const code=(error.statusCode)?error.statusCode:500;
    res.status(code).json({
        message:error.message
    })
})

