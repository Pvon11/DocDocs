const sequelize = require("../config/connection");
const { Conditions, Medications, Patients, Users } = require("../models");
const seedAll = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedAll();
