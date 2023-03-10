const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Medicine extends Model {}

Medicine.init(
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
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usage_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treatments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "medicine",
  }
);

module.exports = Medicine;
