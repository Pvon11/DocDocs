const router = require("express").Router();
const { Patients, Condition } = require("../../models");
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
        name: name
      },
      include: [{ model: Condition, attributes: ['id', 'name']}]
    });
    const patient = patientData.map((data) => data.get({ plain: true }));
    console.log('patient data is', patient);
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



router.put('/', authChecker, async (req, res) => {
  console.log('patient-condition-route')
  try {
    let name = req.body.patientName;
    let pcondition = req.body.patientCondition;

    const conditionData = await Condition.findAll({
      where: {
        name: pcondition
      }

    });

    const condition = conditionData.map((data) => data.get({ plain: true }));
    console.log(condition[0].id);

    const patientData = await Patients.update({ condition_id: condition[0].id }, {
      where: {
        name: name
      }

    });


    console.log(patientData);

    res.json({ msg: "Succesfully added new patient condition.", patientData})
  }
  catch (err) {
    res.status(400).json(err);
  }


});


module.exports = router;