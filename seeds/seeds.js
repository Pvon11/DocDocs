const sequelize = require("../config/connection");
const seedPatients = require('./patientData');
const seedMedications = require('./medicationData');
const seedConditions = require('./conditionData');





const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPatients();

  await seedConditions();

  await seedMedications();

  process.exit(0);
};

seedAll();
