const express = require('express');
const router = express.Router();
const passport = require("passport")
const jwt = require('jsonwebtoken')

const Users = require("../models/Users")
require("../libs/passport")

//auth 
// OAuth Authentication, Just going to this URL will open OAuth screens
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// Oauth user data comes to these redirectURLs
router.get('/googleRedirect', passport.authenticate('google'), (req, res) => {
  console.log('redirected', req.user._json)
  Users.findOrCreate(req.user._json, function (err, cap) {
    if (err) { console.log(err) };
  });
  let token = jwt.sign({
    data: req.user._json
  }, 'secret', { expiresIn: 60 * 30 }); // expiry in seconds
  res.redirect('https://yw4zo.csb.app?token=' + token)
})

module.exports = router;