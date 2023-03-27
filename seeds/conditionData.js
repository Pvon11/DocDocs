const { Condition } = require('../models');


const conditiondata =
[
    {
      "name": "Diabetes",
      "description": "A disease effecting many Americans",
      "symptoms": "Increased Blood Sugar",
      "treatments": "Insulin"
    }
    
  ];

  const seedConditions = () => Condition.bulkCreate(conditiondata);

module.exports = seedConditions;