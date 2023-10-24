const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/MarketplaceDB';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection terminated');
    process.exit(0);
  });
});

module.exports = mongoose;