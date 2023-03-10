const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Patient extends Model {}

Patient.init(
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
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medical_conditions: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    medications: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gallery_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "gallery",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "patient",
  }
);

module.exports = Patient;
