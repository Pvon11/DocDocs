const router = require("express").Router();
const { Condition }= require("../../models");
const { authChecker } = require('../../utils/helpers');

router.post('/', authChecker, async (req, res) => {
    try {
      const newProject = await Condition.create({
        ...req.body
        // user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/:conditionName', authChecker, async (req, res) => {
    try {
      let name = req.paramas.conditionName;
      console.log(name);
  

      // const newProject = await Condition.create({
      //   ...req.body
      //   // user_id: req.session.user_id,
      // });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = router;