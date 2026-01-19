const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user.model");
const WeightLog = sequelize.define(
  "WeightLog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "weight_logs",
    timestamps: true,
  }
);
User.hasMany(WeightLog, { foreignKey: "userId" });
WeightLog.belongsTo(User, { foreignKey: "userId" });

module.exports = WeightLog;
