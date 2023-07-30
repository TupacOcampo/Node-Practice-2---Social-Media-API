const express = require("express");
const userRoute = express.Router();
const authentication = require("../middleware/authentication");

const { login, createUser, userInfo, userTokenRefresh } = require("../controllers/userController");

userRoute.route("/register")
    .post(createUser);

userRoute.route("/login")
    .post(login);

userRoute.route("/")
    .get(authentication, userInfo)

userRoute.route("/refreshToken")
    .post(userTokenRefresh);

module.exports = userRoute;