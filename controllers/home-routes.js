const { authChecker } = require("../utils/helpers");

const router = require("express").Router();
router.get("/", async (req, res) => {
  res.render("sign-in-page", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/conditions", async (req, res) => {
  res.render("conditions", {
    loggedIn: req.session.loggedIn,
  });
});
router.get("/medications", async (req, res) => {
  res.render("medications", {
    loggedIn: req.session.loggedIn,
  });
});
router.get("/patients", async (req, res) => {
  res.render("patients", {
    loggedIn: req.session.loggedIn,
  });
});
router.get("/invoice", async (req, res) => {
  res.render("billing", {
    loggedIn: req.session.loggedIn,
  });
});
router.get("/homepage", async (req, res) => {
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
