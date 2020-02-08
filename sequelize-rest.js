require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const movieRouter = require("./movie/router");
app.listen(process.env.SEQUELIZE_REST_PORT, () => {
  console.log(
    `Server Started and running on port: ${process.env.SEQUELIZE_REST_PORT}`
  );
});
