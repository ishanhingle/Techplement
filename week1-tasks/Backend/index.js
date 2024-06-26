const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();


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
