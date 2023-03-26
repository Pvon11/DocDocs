const router = require("express").Router();
const { Patients }= require("../../models");
const { authChecker } = require('../../utils/helpers');

router.post('/', authChecker, async (req, res) => {
    try {
      const newProject = await Patients.create({
        ...req.body
        // user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  
  router.get('/:patientName', authChecker, async (req, res) => {
    // console.log("condition-search-route");
    try {
      let name = req.params.patientName;
      console.log(name);
  
      const patientData = await Patients.findAll({
        where: {
          name:name
        }
      });
        const patient = patientData.map((data) => data.get({plain:true}));
      // const newProject = await Condition.create({
      //   ...req.body
      //   // user_id: req.session.user_id,
      // });
  
      res.status(200).json(patientData);
      // res.render("conditions", {condition});
    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = router;