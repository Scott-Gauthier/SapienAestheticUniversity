const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  orderedContent: [
    {
      type: Schema.Types.ObjectId,
      ref: 'content'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;