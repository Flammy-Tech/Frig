const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const mongoUrl = 'mongodb://localhost:27017'; // Update with your MongoDB URL
const dbName = 'frig';
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// function setCustomContentType(req, res, next) {
//   const extname = path.extname(req.path);
//   if (extname === '.css') {
//       res.type('text/css');
//   }
//   next();
// }

// // Use the setCustomContentType function before serving static files
// app.use(setCustomContentType);

// Serve static files (e.g., CSS, images)
app.use(express.static('public'));
// app.use('css', express.static(__dirname+'public/css'))
// app.use('js', express.static(__dirname+'public/js'))
// app.use('assets', express.static(__dirname+'public/assets'))

// Import external routes
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const shopRouter = require('./routes/shop');
const signupRouter = require('./routes/signup');
const vendorRouter = require('./routes/vendor');
const vendorProductsRouter = require('./routes/vendorProducts');

// Pass the database instance to the route handlers
app.use('/cart', cartRouter);
app.use('/shop', shopRouter);
app.use('/', signupRouter);
app.use('/vendor', vendorRouter);
app.use('/products', productsRouter);
app.use('/vendorProducts', vendorProductsRouter);


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
