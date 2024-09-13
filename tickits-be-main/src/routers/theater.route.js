const { Router } = require("express");

const theaterRouter = Router();

const authMiddleware = require("../middlewares/auth");

const theaterController = require("../controllers/theater.controller");

theaterRouter.post(
  "/create-schedule",
  authMiddleware.checkToken,
  theaterController.createSchedule
);

theaterRouter.get("/", theaterController.readDataStudio);
theaterRouter.get("/:movie_id", theaterController.readDataByMovie);

module.exports = theaterRouter;
