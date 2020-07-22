const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

  cart
    : { type: Array },
  customer
    : { type: String },
  status
    : { type: String },
  orderTime
    : { type: String }
});


module.exports = mongoose.model('orders', orderSchema);