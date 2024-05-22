const { MongoClient} = require('mongodb');

const mongourl = process.env.MONGO_URL;
const client = new MongoClient(mongourl);

async function connectToDB(collection) {
    await client.connect();
    const db = client.db("shop_wine_db");
    const collectionDB = db.collection(collection);

    return collectionDB;
}

module.exports = {connectToDB};