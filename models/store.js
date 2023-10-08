const mongoose = require('mongoose');
const product = require('./product');

const storeSchema = mongoose.Schema({
    "storeName": String,
    "storeLocation": String,
    "Contact": Number,
    "OriginalLocation": String,  
    "products": {
        type:[product],
        default:{}
    }

});

module.exports = mongoose.model('store', storeSchema);