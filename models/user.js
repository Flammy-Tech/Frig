const mongoose = require('mongoose');
const product = require('./product');

const userSchema = mongoose.Schema({
    "name": String,
    "pseudoName": String,
    "email": string,
    "joinDate": Date.now(),
    "endDate": [Date],
    "id": string,
    "credit": 0,
    "password": String,
    "description": String,
    "products": {
        type:[product],
        default: {}
    }

});

module.exports = mongoose.model('User', userSchema);