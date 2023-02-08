const express = require("express");

const launchesRouter = express.Router();
const { getAllLaunches } = "./launches.controller";

launchesRouter.get("/planets", getAllLaunches);

module.exports = launchesRouter;
