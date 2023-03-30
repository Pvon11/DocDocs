const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

class Condition extends Model {}

Condition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symptoms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "patient",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "condition",
  }
);

module.exports = Condition;
