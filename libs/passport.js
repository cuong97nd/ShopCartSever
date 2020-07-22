const jwt = require('jsonwebtoken')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy;

var opts = {}
opts.jwtFromRequest = function (req) { // tell passport to read JWT from cookies
  return req.headers.jwt
}
opts.secretOrKey = 'secret';

// main authentication, our app will rely on it
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

  if (jwt_payload.data) {
    return done(null, jwt_payload.data)
  } else {
    // user account doesnt exists in the DATA
    return done(null, false)
  }
}))

passport.use(new GoogleStrategy({
  clientID: "161371953818-fb9ll0gd961a3ht2mb2mmf8g8qia2v3k.apps.googleusercontent.com",
  clientSecret: "jCKO6R6bBER25AVCvDuqAD_n",
  callbackURL: "https://severok-1.cuonhbui.repl.co/auth/googleRedirect"
},
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile)
  }
))



// These functions are required for getting data To/from JSON returned from Providers
passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (obj, done) {
  done(null, obj)
})