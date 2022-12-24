const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/Sapien-Aesthetic-University`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;