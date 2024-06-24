const authFunc = require("../db/authFunc");
const argon2 = require("argon2");
const jwtService = require("../services/jwtService");
const { use } = require("../routes/cartRouter");

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

    const token = jwtService.createToken(user._id.toString(), user.email);

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

async function updateUserName(req, res) {
    const id = req.userData.userId;
    const { name } = req.body;
    const user = await authFunc.updateUserName(id, name)
    res.json({
        status: "OK",
        message: "Username Updated",
        user
    })
}

async function updateUserNameById(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const user = await authFunc.updateUserName(id, name)
    if (user) {
        res.json({
            status: "OK",
            message: "Username Updated",
            user
        })
    } else {
        res.json({
            status: "Error",
            message: "User doesn't exist",
            user
        })
    }
}

async function updateUserEmail(req, res) {
    const id = req.userData.userId;
    const { email } = req.body;
    const emailExist = await authFunc.getUserByEmail(email);

    if (!emailExist) {
        const user = await authFunc.updateUserEmail(id, email);
        res.json({
            status: "OK",
            message: "Email Updated",
            user
        })
    } else {
        res.json({
            status: "Error",
            message: "The email is already being used"
        })
    }
}

async function updateUserEmailById(req, res) {
    const { id } = req.params;
    const { email } = req.body;
    const emailExist = await authFunc.getUserByEmail(email);

    if (!emailExist) {
        const user = await authFunc.updateUserEmail(id, email);
        if (user) {
            res.json({
                status: "OK",
                message: "Email Updated",
                user
            })
        } else {
            res.json({
                status: "Error",
                message: "User doesn't exist",
                user
            })
        }
    } else {
        res.json({
            status: "Error",
            message: "The email is already being used"
        })
    }
}

async function updateUserPassword(req, res) {
    const id = req.userData.userId;
    const { password } = req.body;
    const hash = await argon2.hash(password);
    const user = await authFunc.updateUserPassword(id, hash)
    res.json({
        status: "OK",
        message: "Password Updated",
        user
    })
}

async function updateUserPasswordById(req, res) {
    const { id } = req.params;
    const { password } = req.body;
    const hash = await argon2.hash(password);
    const user = await authFunc.updateUserPassword(id, hash)
    if (user) {
        res.json({
            status: "OK",
            message: "Password Updated",
            user
        })
    } else {
        res.json({
            status: "Error",
            message: "User doesn't exist",
            user
        })
    }
}
module.exports = {
    userRegister,
    userLogin,
    deleteUserById,
    updateUserName,
    updateUserNameById,
    updateUserEmail,
    updateUserEmailById,
    updateUserPassword,
    updateUserPasswordById
}