// Import necessary modules
const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");

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

router.route('/')
    .get(async (req, res) => {
        try {
            const searchQuery = req.query.search;

            let products = await retrieveProducts(); // Retrieve all products asynchronously

            if (searchQuery) {
                // filter function to find documents that match the search query
                products = products.filter(item => {
                    return (
                        item.productName.includes(searchQuery) ||
                        item.productType.includes(searchQuery) ||
                        item.recommendation.includes(searchQuery) ||
                        item.currentTag.includes(searchQuery)
                    );
                });
                
            }

            res.render('shop', { products, searchQuery });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error'); // Handle errors gracefully
        }
    });

module.exports = router;
