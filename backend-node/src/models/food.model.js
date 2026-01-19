const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Food = sequelize.define(
  "Food",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caloriesPer100g: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    protein: {
      type: DataTypes.FLOAT,
    },
    carbs: {
      type: DataTypes.FLOAT,
    },
    fat: {
      type: DataTypes.FLOAT,
    },
  },
  {
    tableName: "foods",
    timestamps: true,
  }
);

module.exports = Food;
