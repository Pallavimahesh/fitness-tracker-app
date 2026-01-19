const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user.model");
const Food = require("./food.model");

const MealLog = sequelize.define(
  "MealLog",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalCalories: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    mealType: {
      type: DataTypes.ENUM("breakfast", "lunch", "dinner", "snacks"),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "meal_logs",
    timestamps: true,
  }
);

/* Associations */
User.hasMany(MealLog, { foreignKey: "userId" });
MealLog.belongsTo(User, { foreignKey: "userId" });

Food.hasMany(MealLog, { foreignKey: "foodId" });
MealLog.belongsTo(Food, { foreignKey: "foodId" });

module.exports = MealLog;
