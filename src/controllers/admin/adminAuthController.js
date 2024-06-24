const authFunc = require("../../db/admin/adminAuthFunc");
const argon2 = require("argon2");
const jwtService = require("../../services/jwtService");

async function adminRegister(req, res) {
    const { email, password, name } = req.body;
    const adminParams = {
        email,
        name
    }
    const hash = await argon2.hash(password);
    const admin = await authFunc.adminRegister(adminParams, hash);
    if (admin !== false) {
        res.json({
            status: "OK",
            message: "Admin created",
            admin
        })
    } else {
        res.json({
            status: "Error",
            message: "Admin already exists"
        })
    }

}

async function adminLogin(req, res) {
    const { email, password } = req.body;

    const admin = await authFunc.getAdminByEmail(email);

    if (!admin) {
        res.status(400).json({
            status: "Error",
            message: "Admin Not Found"
        });
        return;
    }

    const userHash = admin.hash;
    const passwordVerify = await argon2.verify(userHash, password);
    if (!passwordVerify) {
        res.status(404).json({
            status: "Error",
            message: "Wrong password"
        });
        return;
    }

    const token = jwtService.createToken(admin._id.toString(), admin.email);

    res.json({
        status: "Ok",
        message: "Admin logged in",
        token
    });

}

async function deleteAdminById(req, res) {
    const { id } = req.params;
    const admin = await authFunc.deleteAdminById(id);

    if (!admin) {
        res.status(400).json({
            status: "Error",
            message: "Admin Not Found"
        });
        return;
    }

    res.json({
        status: "Deleted",
        message: "Admin deleted",
        admin
    });
}

async function updateAdminName(req, res) {
    const id = req.userData.userId;
    const { name } = req.body;
    const admin = await authFunc.updateAdminName(id, name)
    res.json({
        status: "OK",
        message: "Admin Name Updated",
        admin
    })
}

async function updateAdminEmail(req, res) {
    const id = req.userData.userId;
    const { email } = req.body;
    const emailExist = await authFunc.getAdminByEmail(email);

    if (!emailExist) {
        const admin = await authFunc.updateAdminEmail(id, email);
        res.json({
            status: "OK",
            message: "Email Updated",
            admin
        })
    } else {
        res.json({
            status: "Error",
            message: "The email is already being used"
        })
    }
}

async function updateAdminPassword(req, res) {
    const id = req.userData.userId;
    const { password } = req.body;
    const hash = await argon2.hash(password);
    const admin = await authFunc.updateAdminPassword(id, hash)
    res.json({
        status: "OK",
        message: "Password Updated",
        admin
    })
}

module.exports = {
    adminRegister,
    adminLogin,
    deleteAdminById,
    updateAdminName,
    updateAdminEmail,
    updateAdminPassword
}