const Food = require("../models/food.model");
const MealLog = require("../models/mealLog.model");

exports.addMeal = async (req, res) => {
  try {
    const { userId, foodId, quantity, mealType, date } = req.body;
    const food = Food.findByPk(foodId);
    if (!food) return res.status(404).json({ message: "Food not found" });
    const totalCalories = (food.caloriesPer100g * quantity) / 100;

    const meal = await MealLog.create({
      userId,
      foodId,
      quantity,
      mealType,
      date,
      totalCalories,
    });

    res.status(201).json(meal);
  } catch {
    res.status(500).json({ message: "Failed to add Meal" });
  }
};

exports.getMealsByDate = async (req, res) => {
  try {
    const { userId, date } = req.body;
    const meal = await MealLog.findAll({
      where: { userId, date },
      include: [Food],
    });
    res.status(201).json(meal);
  } catch {
    res.status(500).json({ message: "Failed to fetch Meal" });
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;
    await MealLog.destroy({ where: { id } });
    res.status(200).json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete meal" });
  }
};
