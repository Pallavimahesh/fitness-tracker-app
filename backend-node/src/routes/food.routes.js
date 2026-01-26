const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");

router.get("/", foodController.getAllFoods);
module.exports = router;
