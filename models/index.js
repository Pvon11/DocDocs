//how to create foreign key?


const Users = require("./Users");
const Conditions = require("./Conditions");
const Patients = require("./Patients");
const Medications = require("./Medications");

Gallery.hasMany(Painting, {
  foreignKey: "gallery_id",
});

Painting.belongsTo(Gallery, {
  foreignKey: "gallery_id",
});

module.exports = { Users, Conditions, Patients, Medications };
