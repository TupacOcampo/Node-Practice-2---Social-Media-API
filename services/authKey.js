const jwt = require("jsonwebtoken");

function tokenCreation (user){
    const accessToken = jwt.sign(user, process.env.SECRET_TOKEN);
    return accessToken;
}

module.exports = tokenCreation;