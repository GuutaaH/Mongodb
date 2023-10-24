
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 4000;
const marketPlaceDb = [{
    "_id": {
      "$oid": "653721489777ca87d2d4fce7"
    },
    "id": 1,
    "name": "jeans",
    "description": "bottom",
    "price": 20,
    "qauntity": 200,
    "category": "clothing"
  },
  {
    "_id": {
      "$oid": "653721bb9777ca87d2d4fce8"
    },
    "id": 1,
    "name": "jacket",
    "description": "cold",
    "price": 22,
    "qauntity": 200,
    "category": "clothing"
  },
  {
    "_id": {
      "$oid": "653721cf9777ca87d2d4fce9"
    },
    "id": 1,
    "name": "shorts",
    "description": "warm",
    "price": 23,
    "qauntity": 200,
    "category": "clothing"
  },
  {
    "_id": {
      "$oid": "653721e19777ca87d2d4fcea"
    },
    "id": 1,
    "name": "dress",
    "description": "hot",
    "price": 45,
    "qauntity": 200,
    "category": "clothing"
  },
  {
    "_id": 7,
    "message": "Welcome to our store"
  }]



try {
    // Connect to the local MongoDB database
    mongoose.connect('mongodb://localhost:27017/MarketplaceDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to the MongoDB database');
    });
    app.get("/",(req,res)=>{

        res.send(marketPlaceDb[4] )



       
        
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.error('An error occurred:', error);
}
