const mongoose = require("mongoose");

const postScheema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title required"],
    },
    body:{
        type:String,
        required:[true, "Body required"],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }

}, {timeStamp:true});

module.exports = mongoose.model("Post", postScheema);