const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Initialize MongoDB Database
const url = "mongodb://localhost:27017";
const dbName = "frig";
const collectionName = "product";

const client = new MongoClient(url);

// Retrieve products from MongoDB products collection
async function retrieveProducts() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find({}).toArray();
        return documents; // Return the retrieved data
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

router.get('/',async(req,res)=>{
    let products = await retrieveProducts(); // Retrieve all products asynchronously

    res.render('vendorProducts', { products});

});

module.exports = router;