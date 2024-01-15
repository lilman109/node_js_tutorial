const express = require("express");
const googleAuthRouter = require("./auth/googleAuth");

const api = express.Router();

api.use("/auth/google", googleAuthRouter);

module.exports = api;
