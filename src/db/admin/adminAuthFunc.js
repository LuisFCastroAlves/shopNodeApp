const { ObjectId } = require('mongodb');
const cartFunc = require('../cartFunc');
const { connectToDB } = require('../connectToDB');

async function adminRegister(userParams, hash) {
    try {
        const admins = await connectToDB("admins");
        const adminExist = await getAdminByEmail(userParams.email);

        if (!adminExist) {
            const newUser = await admins.insertOne(
                {
                    "email": userParams.email,
                    "hash": hash,
                    "name": userParams.name
                }
            )

            const adminInfo = await getAdminByEmail(userParams.email);

            return newUser;
        }

        return false

    } catch (error) {
        console.error("Error:", error);
    }
}

async function getAdminByEmail(email) {
    try {
        const admins = await connectToDB("admins");

        const adminInfo = await admins.findOne(
            {
                "email": email
            }
        )

        return adminInfo;

    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteAdminById(id) {
    try {
        const admins = await connectToDB("admins");
        const admin = await admins.deleteOne({
            "_id": ObjectId.createFromHexString(id),
        })

        await cartFunc.deleteCart(id);

        return admin
    } catch (error) {
        console.error("Error:", error);
    }
}

async function updateAdminName(id, params) {
    try {
        const admins = await connectToDB("admins");
        const admin = await admins.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: { name: params },
            }
        )
        return admin;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function updateAdminEmail(id, params) {
    try {
        const admins = await connectToDB("admins");
        const admin = await admins.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: { email: params },
            }
        )
        return admin;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function updateAdminPassword(id, params) {
    try {
        const admins = await connectToDB("admins");
        const admin = await admins.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: { hash: params },
            }
        )
        return admin;
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = {
    adminRegister,
    getAdminByEmail,
    deleteAdminById,
    updateAdminName,
    updateAdminEmail,
    updateAdminPassword
}