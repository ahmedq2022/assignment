const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.post("/product/new", productController.createProduct);

module.exports = router;