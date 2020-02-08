require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const movieRouter = require("./movie/router");
app.use(movieRouter);
app.listen(process.env.SEQUELIZE_REST_PORT, () => {
  console.log(
    `Server Started and running on port: ${process.env.SEQUELIZE_REST_PORT}`
  );
});
