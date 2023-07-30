const asyncHandler = require("express-async-handler");
const User = require ("../models/userModel");
const tokenCreation = require("../services/authKey");
const bcrypt = require("bcrypt");

const createUser = asyncHandler( async(req, res) => {
    const {userName, password, email, name, lastName} = req.body;
    if (!userName || !password || !email || !name || !lastName){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    if (await User.exists({userName})){
        res.status(400);
        throw new Error("This username already exists!");
    }

    if (await User.exists({email})){
        res.status(400);
        throw new Error("This email is already in use!");
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = {
        userName, 
        password:hashedPass, 
        email, 
        name, 
        lastName
    }

    User.create(newUser);    

    res.status(201).json(newUser);
});

const login = asyncHandler( async(req, res)=>{
    const { email, password } = req.body;

    if (!email, !password){
        res.status(400).json({"message":"Email and password are mandatory!"});
        throw new Error("Email and password are mandatory");
    }

    const foundUser = await User.findOne({email});
    
    if (!foundUser){
        res.status(404).json({"message":"This user does not exist!"});
        throw new Error("This user does not exist!");
    }

    if (!bcrypt.compare(password, foundUser.password)){
        res.status(400).json({"message":"Incorrect password!"});
    }

    const token = tokenCreation({
        user:{
            userName: foundUser.userName,
            email:foundUser.email,
            name:foundUser.name,
            lastName:foundUser.lastName
        }
    });

    res.status(200).json(token);
});

const userInfo = asyncHandler (async (req, res) => {
    const currentUser = await User.findOne({email:req.user.user.email}).populate("posts");
    
    if (!currentUser){
        res.status(400).json({"message":"There was an error!"});
        throw new Error("There was an error!");
    }

    res.status(200).json(currentUser);
});

module.exports = { createUser, login, userInfo }
