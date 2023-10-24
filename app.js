const express = require('express');
const mongoose = require('./db');
const Product = require('./productModel');

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
