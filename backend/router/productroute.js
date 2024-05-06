const express = require("express");
const router =  express.Router();
const {productListController,placeOrderController} = require('../controller/productcontroller')

router.get('/productlist',productListController);
router.post('/placeOrder',placeOrderController);

module.exports = router;