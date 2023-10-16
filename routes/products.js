// Import necessary modules
const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");

// Initialize MongoDB Database
const url = "mongodb://localhost:27017";
const dbName = "frig";
const collectionName = "product";

const client = new MongoClient(url);

//  route to add a new product
router.route('/add')
    .get((req, res) => {
        res.render('add-product'); // Render a form to add a new product
    })
    .post(async (req, res) => {
        try {
            const newProduct = {
                productName: req.body.productName,
                productType: req.body.productType,
                recommendation: req.body.recommendation,
                currentTag: req.body.currentTag,
                // Add other fields as needed
            };

            // Insert the new product into the MongoDB collection
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            const result = await collection.insertOne(newProduct);

            console.log(`Added product with _id: ${result.insertedId}`);

            res.redirect('/vendorProducts'); // Redirect to the product listing page
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error'); // Handle errors gracefully
        }
    });

module.exports = router;
