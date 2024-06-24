/* IMPORTS */ 

// MongoDB Functions
const { MongoClient} = require('mongodb');


/* FUNCTIONS */

// GET URL DATA BASE
const mongourl = process.env.MONGO_URL;
const client = new MongoClient(mongourl);

// CONNECTION TO DATA BASE AND COLLECTION
async function connectToDB(collection) {
    await client.connect();
    const db = client.db("shop_wine_db");
    const collectionDB = db.collection(collection);

    return collectionDB;
}

module.exports = {connectToDB};