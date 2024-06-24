/* IMPORTS */

// Jwt Functions
const jwt = require("jsonwebtoken");
const jwtSecret = "superSecretPrivateKey";

/* JwtServices Functions */

// CREATE TOKEN
function createToken(userId, email) {
    
    const tokenPayload = {
        userId,
        email
    }

    const token = jwt.sign(tokenPayload, jwtSecret, {
        expiresIn: "1d"
    });

    return token;
}

// VERIFY TOKEN
function verifyToken(token) {
    let payload;
    try {
        payload = jwt.verify(token, jwtSecret);
    } catch (error) {
        console.log(error);
    }
    return payload;
}

module.exports = {
    createToken,
    verifyToken
}