const Food = require("../models/food.model");

exports.getAllFoods = async (req, res) => {
  try {
    const food = await Food.findAll();
    res.status(200).json(food);
  } catch {
    res.status(500).json({ message: "Failed to fetch foods" });
  }
};
