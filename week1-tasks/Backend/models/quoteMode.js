const mongoose=require('mongoose');
const quoteSchema=new mongoose.Schema({
    body:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    name:{
        type:String,
        required:true,
    }
})
const quoteModel=mongoose.model("Quotes",quoteSchema);
module.exports=quoteModel;