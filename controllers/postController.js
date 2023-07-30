const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Post = require("../models/postModel");

const createPost = asyncHandler( async(req, res) => {
    foundUser = await User.findOne ({email: req.user.user.email});

    if (!foundUser) {
        res.status(400).json({"message":"User was not authenticated. Please log in."});
        throw new Error("All fields are mandatory");
    }

    const { title, body } = req.body;
    if (!title || !body){
        res.status(400).json({"message":"All fields are mandatory"});
        throw new Error("All fields are mandatory");
    }

    const addedPost = await Post.create({
        title,
        body,
        user:foundUser,
    })

    foundUser.posts.push(addedPost.id);

    await User.findByIdAndUpdate(foundUser.id, {
        posts:foundUser.posts
    })

    res.status(201).json(addedPost);
});

const getPosts = asyncHandler(async (req, res) => {
    const foundUser = await User.findOne({email:req.user.user.email});
    if (!foundUser){
        res.status(404).json({"message":"Invalid user!"});
        throw new Error("Invalid User!");
    }

    const messages = await Post.find({user:foundUser.id}).populate("user");
    res.status(200).json(messages);
});

module.exports = { createPost, getPosts };