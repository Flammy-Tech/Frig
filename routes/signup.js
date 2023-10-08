// Import necessary modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

// Initialize MongoDB Database
const url = 'mongodb://localhost:27017';
const dbName = 'frig';

// Connect to the MongoDB database
const client = new MongoClient(url);

router.get('/', (req, res) => {
    res.render('signup');
});

// Handle user registration
router.post('/signup', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        // Connect to the database
        await client.connect();
        const db = client.db(dbName);
        const users = db.collection('users');

        // Check if the email is already registered
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const newUser = {
            username,
            email,
            password: hashedPassword,
        };
        await users.insertOne(newUser);

        // Respond with sign-up page
        res.render('shop');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
});

module.exports = router;
