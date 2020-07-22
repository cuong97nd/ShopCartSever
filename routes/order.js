const express = require('express');
const router = express.Router();

const Orders = require('../models/Orders');

router.get('/', async (req, res) => {
  const orders = await Orders.find({});
  res.json({orders} );
});

router.post('/', async (req, res) => {
  console.log("req", req.body)
  const order = new Orders({
    ...req.body,
    status : "処理中",
    orderTime : new Date().toLocaleString()
  });

  const result = await order.save();
  res.send(result)
});



module.exports = router;