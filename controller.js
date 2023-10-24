const Product = require('./productModel');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving products' });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving the product' });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating the product' });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the product' });
  }
};
