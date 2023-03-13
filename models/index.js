const Users = require("./Users");
const Conditions = require("./Conditions");
const Patients = require("./Patients");
const Medications = require("./Medications");


Patients.hasMany(Medications, {
  foreignKey: "medication_id",
});

Patients.hasMany(Conditions, {
  foreignKey: "condition_id",
});


Medications.belongsTo(Patients, {
  foreignKey: "medication_id",
});

Conditions.belongsTo(Patients, {
  foreignKey: "condition_id",
});




module.exports = { Users, Conditions, Patients, Medications };
