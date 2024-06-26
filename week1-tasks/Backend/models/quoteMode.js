const mongoose=require('mongoose');
const quoteSchema=new mongoose.Schema({
    body:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }
})
const quoteModel=mongoose.Model("Quotes",userSchema);
module.exports=quoteModel;