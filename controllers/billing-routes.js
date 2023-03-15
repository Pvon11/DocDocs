
const router = require("express").Router();
// const path = require('path');


router.get('/invoice', (req, res) => {

    res.render('billing');
});

// res.render('homepage', { 
//     projects, 
//     logged_in: req.session.logged_in 
//   });



module.exports = router;

