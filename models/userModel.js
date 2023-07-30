const mongoose = require("mongoose");

const userScheema = mongoose.Schema({
    userName: {
        type:String,
        required:[true, "User name is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    name:{
        type:String,
        required:[true, "Name is required"],
    },
    lastName:{
        type:String,
        required:[true, "Last name is required"]
    },
    posts:[{
        type:mongoose.Types.ObjectId,
        ref:"Post"
    }]
},{timeStamp:true});

module.exports = mongoose.model("User", userScheema);