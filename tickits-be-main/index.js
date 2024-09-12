
require("dotenv").config();


const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


const app = express();


const serverPort = process.env.SERVER_PORT;


const masterRouter = require("./src/routers");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use(masterRouter);


app.listen(serverPort, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
  console.log(`App listening on port: ${serverPort}`);
});

module.exports = app;
