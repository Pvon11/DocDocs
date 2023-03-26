const router = require("express").Router();

const userRoutes = require("./user-routes");
const conditionRoutes = require("./condition-routes");
const medicationRoutes = require("./medication-routes");
const patientRoutes = require("./patient-routes");

router.use("/users", userRoutes);
router.use("/conditions", conditionRoutes);
router.use("/medications", medicationRoutes);
router.use("/patients", patientRoutes);

module.exports = router;
