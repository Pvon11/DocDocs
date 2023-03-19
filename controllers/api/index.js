const router = require("express").Router();

const userRoutes = require("./user-routes");
const conditionRoutes = require("./condition-routes");

router.use("/users", userRoutes);
router.use("/conditions", conditionRoutes);



module.exports = router;
