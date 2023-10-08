const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const mongoUrl = 'mongodb://localhost:27017'; // Update with your MongoDB URL
const dbName = 'frig';

app.set('view engine', 'ejs');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Import external routes
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const shopRouter = require('./routes/shop');
const signupRouter = require('./routes/signup');

// Pass the database instance to the route handlers
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/shop', shopRouter);
app.use('/signup', signupRouter);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
