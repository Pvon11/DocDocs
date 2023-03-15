const sequelize = require('../config/connection');
const seedPatients = require('./patient-seeds');
const seedMedications = require('./medication-seeds');
const seedBillings = require('./billing-seeds');
const seedConditions = require('./condition-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAllPatients();

  await seedAllMedications();

  await seedAllBillings();

  await seedAllConditions();

  process.exit(0);
};

seedAll();
