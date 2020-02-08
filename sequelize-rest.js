require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const movieRouter = require("./movie/router");
const port = process.env.PORT || process.env.SEQUELIZE_REST_PORT;
app.use(cors());
app.use(express.json());
app.use(movieRouter);
app.listen(port, () => {
  console.log(`Server Started and running on port: ${port}`);
});
