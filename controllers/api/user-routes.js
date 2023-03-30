//const router = require('express').Router();

//const userRoutes = require('./user-routes');

///router.use('/users', userRoutes);

//module.exports = router;
const router = require("express").Router();

const { Users } = require("../../models");
const hostEmail = require("../../utils/app");

router.post("/login", async (req, res) => {
  try {
    const dbUser = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUser) {
      return res.status(404).json({ message: "No access" });
    }

    const isValidPassword = await dbUser.checkPassword(req.body.password);

    if (!isValidPassword) {
      return res.status(404).json({ message: "Wrong password" });
    }
    // await hostEmail();

    req.session.save(() => {
      req.session.dbUser = dbUser;
      req.session.loggedIn = true;
      return res.json({
        message: "Welcome!",
        user: dbUser,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Incorrect" });
  }
});

router.post("/signup", async (req, res) => {
  console.log("signup");
  try {
    const dbUser = await Users.create(req.body);
    const plainUser = dbUser.get({ plain: true });

    // if there's no email, throw an error, and stop executing the login functionality
    if (!req.body.email) res.status(500).json({ error: "No emailprovided!" });

    await hostEmail(req.body.email);

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(201).json(plainUser);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Incorrect" });
  }
});

router.post("/logout", async (req, res) => {
  console.log(req.session.loggedIn, "lets see");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
