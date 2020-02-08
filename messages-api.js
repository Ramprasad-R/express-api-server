require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
let counter = 0;
const counterMiddleware = (req, res, next) => {
  counter = counter + 1;
  if (counter <= 5) {
    next();
  } else {
    res.sendStatus(429);
  }
};
app.post("/messages", counterMiddleware, (req, res) => {
  const message = req.body;

  if (JSON.stringify(message) !== "{}") {
    console.log(message);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});
app.listen(process.env.MESSAGE_API_PORT, () => {
  console.log(
    `Server Started and running on port: ${process.env.MESSAGE_API_PORT}`
  );
});
