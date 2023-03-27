const { Patients } = require('../models');


const patientdata =
[
    {
      "name": "Jon Doe",
      "dob": "01/01/1996",
      "notes": "Will come back in May"
    }
    
  ];

  const seedPatients = () => Patients.bulkCreate(patientdata);

module.exports = seedPatients;