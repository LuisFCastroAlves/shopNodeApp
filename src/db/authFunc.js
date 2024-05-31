const { ObjectId } = require('mongodb');
const cartFunc = require('./cartFunc');
const { connectToDB } = require('./connectToDB');

async function userRegister(userParams, hash) {
    try {
        const users = await connectToDB("users");
        const userExist = await getUserByEmail(userParams.email);

        if (!userExist) {
            const newUser = await users.insertOne(
                {
                    "email": userParams.email,
                    "hash": hash,
                    "name": userParams.name
                }
            )

            const userInfo = await getUserByEmail(userParams.email);
            await cartFunc.createCart(userInfo._id.toString())

            return newUser;
        }

        return false

    } catch (error) {
        console.error("Error:", error);
    }
}

async function getUserByEmail(email) {
    try {
        const users = await connectToDB("users");

        const userInfo = await users.findOne(
            {
                "email": email
            }
        )

        return userInfo;

    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteUserById(id) {
    try {
        const users = await connectToDB("users");
        const user = await users.deleteOne({
            "_id": ObjectId.createFromHexString(id),
        })

        await cartFunc.deleteCart(id);

        return user
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = {
    userRegister,
    getUserByEmail,
    deleteUserById
}