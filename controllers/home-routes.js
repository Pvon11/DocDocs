const router = require("express").Router();
router.get("/", async (req, res) => {
  res.render("sign-in-page", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/conditions", async (req, res) => {
  res.render("conditions");
});
router.get("/medications", async (req, res) => {
  res.render("medications");
});
router.get("/patients", async (req, res) => {
  res.render("patients");
});
router.get("/invoice", (req, res) => {
  res.render("billing");
});
router.get("/homepage", (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } else {
    res.redirect("/error");
  }
});
router.get("/error", async (req, res) => {
  res.render("error");
});

module.exports = router;
