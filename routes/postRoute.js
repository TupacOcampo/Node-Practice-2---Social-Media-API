const express = require("express");
const postRoute = express.Router();
const authentication = require("../middleware/authentication");

const { createPost, getPosts } = require("../controllers/postController");

postRoute.route("/createPost")
    .post(authentication, createPost);

postRoute.route("/")
    .get(authentication, getPosts)

module.exports = postRoute;