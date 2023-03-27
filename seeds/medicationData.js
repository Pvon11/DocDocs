const { Medications } = require('../models');


const medicationdata =
[
    {
      "name": "Insulin",
      "description": "Used to lower blood sugar",
      "usage_type": "Injection",
      "treatments": "Diabetes"
    }
    
  ];

  const seedMedications = () => Medications.bulkCreate(medicationdata);

  module.exports = seedMedications;