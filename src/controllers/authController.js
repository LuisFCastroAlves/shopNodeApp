const authFunc = require("../db/authFunc");
const argon2 = require("argon2");
const jwtService = require("../services/jwtService");

async function userRegister(req, res) {
    const { email, password, name } = req.body;
    const userParams = {
        email,
        name
    }
    const hash = await argon2.hash(password);
    const user = await authFunc.userRegister(userParams, hash);
    if (user !== false) {
        res.json({
            status: "OK",
            message: "User created",
            user
        })
    } else {
        res.json({
            status: "Error",
            message: "User already exists"
        })
    }

}

async function userLogin(req, res) {
    const { email, password } = req.body;

    const user = await authFunc.getUserByEmail(email);

    if (!user) {
        res.status(400).json({
            status: "Error",
            message: "User Not Found"
        });
        return;
    }

    const userHash = user.hash;
    const passwordVerify = await argon2.verify(userHash, password);
    if (!passwordVerify) {
        res.status(404).json({
            status: "Error",
            message: "Wrong password"
        });
        return;
    }

    const token = jwtService.createToken(user.id, user.email);

    res.json({
        status: "Ok",
        message: "User logged in",
        token
    });

}

async function deleteUserById(req, res) {
    const { id } = req.params;
    const user = await authFunc.deleteUserById(id);

    if (!user) {
        res.status(400).json({
            status: "Error",
            message: "User Not Found"
        });
        return;
    }

    res.json({
        status: "Deleted",
        message: "User deleted",
        user
    });
}

module.exports = {
    userRegister,
    userLogin,
    deleteUserById
}