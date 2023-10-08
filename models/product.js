const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    "productId": Number,
    "productName":String,
    "productDescription":String,
    "productType":String,
    "currentTag": Number,
    "previousTag": Number,
    "sellerReputation":String,
    "recommendation": Number,
    
});

module.exports = mongoose.model('product', productSchema);