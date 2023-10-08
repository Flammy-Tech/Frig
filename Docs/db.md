### Docs for the Database models

## StoreDB
```javascript
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
```


## ProductDB

```javascript
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
```

## userDB

```javascript
const userSchema = mongoose.Schema({
    "name": String,
    "pseudoName": String,
    "email": string,
    "joinDate": Date.now(),
    "endDate": [Date],
    "id": string,
    "credit": 0,
    "description": String,
    "products": {
        type:[product],
        default: {}
    }

});

```