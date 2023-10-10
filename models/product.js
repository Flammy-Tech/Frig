const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    "storeName": String,
    "storeLocation": String,
    "Contact": Number,
    "OriginalLocation": String,
    "productId": ObjectId,
    "productName":String,
    "productDescription":String,
    "productType":String,
    "currentTag": Number,
    "previousTag": Number,
    "sellerReputation":String,
    "recommendation": Number,
    
});

module.exports = mongoose.model('product', productSchema);