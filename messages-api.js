require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const limiter = rateLimit({
  max: 5
});
app.use(limiter);
app.use(express.json());
app.post("/messages", (req, res) => {
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
