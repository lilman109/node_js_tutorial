const express = require("express");

const passport = require("passport");

const { Strategy } = require("passport-google-oauth20");

require("dotenv").config();

const config = {
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google profile", profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const googleAuthRouter = express.Router();

googleAuthRouter.get(
  "/",
  passport.authenticate("google", { scope: ["email"] }),
);

googleAuthRouter.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  }),
  (req, res) => {
    console.log("google called us back");
  },
);

module.exports = googleAuthRouter;
