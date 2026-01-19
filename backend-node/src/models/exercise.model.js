const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Exercise = sequelize.define(
  "Exercise",
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
    caloriesPerMinute: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "exercises",
    timestamps: true,
  }
);

module.exports = Exercise;
