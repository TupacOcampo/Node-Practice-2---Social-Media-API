const jsonWebToken = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authentication = asyncHandler ( async (req, res, next) => {
    if (!req.headers["authorization"]){
        res.status(400).json({"message":"No authentication token was provided!"});
        throw new Error("No authentication");
    }

    const token = req.headers["authorization"].split(" ")[1];
    if (!token){
        res.status(400).json({"message":"There was a problem retrieving authorization token"});
        throw new Error("Error retrieving authorization token");
    }

    jsonWebToken.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err){
            res.status(400).json({"message":"Error during auth key validation"});
            throw new Error("Error during auth key validation");
        }
        else{
            req.user = user;
            next();
        }
    })
})

module.exports = authentication;