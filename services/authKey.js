const jwt = require("jsonwebtoken");

function tokenCreation (user){
    const accessToken = jwt.sign(user, process.env.SECRET_TOKEN, {expiresIn: '15s'});
    return accessToken;
}

function refreshTokenCreation(user){
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
    return refreshToken;
} 

function refreshProvidedToken(refreshToken){
    let refreshedToken;
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if (err){
            res.status(400).json({"message":"Error during auth key validation"});
            throw new Error("Error during auth key validation");
        }
        else{
            refreshedToken = tokenCreation({user:user.user}); 
        }
    });

    return refreshedToken
}

module.exports = { tokenCreation, refreshTokenCreation, refreshProvidedToken };