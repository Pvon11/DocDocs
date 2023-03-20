const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

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

    invoice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    condition_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "condition",
        key: "id",
      },
    },
    medication_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "medications",
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
