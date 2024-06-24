/* IMPORTS */ 

// MongoDB Functions
const { connectToDB } = require('./connectToDB');
const { ObjectId } = require('mongodb');

// Cart Functions
const cartFunc = require('./cartFunc');

/* FUNCTIONS */

// USER REGISTER
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
            await cartFunc.createCart(userInfo._id.toString());

            return newUser;
        }

        return false;

    } catch (error) {
        console.error("Error:", error);
    }
}

// GET USER BY EMAIL
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

// DELETE USER BY ID
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

// UPDATE USERNAME
async function updateUserName(id, params) {
    try {
        const users = await connectToDB("users");
        const user = await users.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: { name: params },
            }
        )
        return user;
    } catch (error) {
        console.error("Error:", error);
    }
}

// UPDATE USER EMAIL
async function updateUserEmail(id, params) {
    try {
        const users = await connectToDB("users");
        const user = await users.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: { email: params },
            }
        )
        return user;
    } catch (error) {
        console.error("Error:", error);
    }
}

// UPDATE USER PASSWORD
async function updateUserPassword(id, params) {
    try {
        const users = await connectToDB("users");
        const user = await users.updateOne(
            {
                _id: ObjectId.createFromHexString(id)
            },
            {
                $set: { hash: params },
            }
        )
        return user;
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = {
    userRegister,
    getUserByEmail,
    deleteUserById,
    updateUserName,
    updateUserEmail,
    updateUserPassword
}