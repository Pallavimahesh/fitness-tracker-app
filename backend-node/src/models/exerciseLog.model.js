const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user.model");
const Exercise = require("./exercise.model");

const ExerciseLog = sequelize.define(
  "ExerciseLog",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    durationMinutes: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    caloriesBurnt: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "exercise_logs",
    timestamps: true,
  }
);

/* Associations */
User.hasMany(ExerciseLog, { foreignKey: "userId" });
ExerciseLog.belongsTo(User, { foreignKey: "userId" });

Exercise.hasMany(ExerciseLog, { foreignKey: "exerciseId" });
ExerciseLog.belongsTo(Exercise, { foreignKey: "exerciseId" });

module.exports = ExerciseLog;
