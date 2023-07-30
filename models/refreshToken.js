const mongoose = require("mongoose");

const refreshTokenScheema = mongoose.Schema({
    refreshToken:{
        type:String,
        required:[true, "Refresh token must be provided"]
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "User must be provided"],
    },
},{timeStamp:true});

module.exports = mongoose.model("RefreshToken", refreshTokenScheema)