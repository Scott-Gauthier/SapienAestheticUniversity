const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();

const connectionString =
  process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/Sapien-Aesthetic-University-DB`;

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(connectionString, {
=======

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
>>>>>>> a646a80f0954133fd21bc3cd3dbfb749d26fc4fa
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

<<<<<<< HEAD
// Export connection
module.exports = mongoose.connection;
=======
module.exports = mongoose.connection;
>>>>>>> a646a80f0954133fd21bc3cd3dbfb749d26fc4fa
