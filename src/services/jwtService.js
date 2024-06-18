const jwt = require("jsonwebtoken");

const jwtSecret = "superSecretPrivateKey";

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

function verifyToken(token) {
    let payload;
    try {
        payload = jwt.verify(token, jwtSecret);
        console.log(payload);
    } catch (error) {
        console.log(error);
    }
    return payload;
}

module.exports = {
    createToken,
    verifyToken
}