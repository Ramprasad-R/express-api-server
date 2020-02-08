require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || process.env.MESSAGE_API_PORT;
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
app
  .post("/messages", counterMiddleware, (req, res) => {
    const message = req.body;

    if (JSON.stringify(message) !== "{}") {
      console.log(message);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  })
  .get("*", (req, res) =>
    res
      .status(400)
      .send(
        "Bad request send request to /messages endpoint. Example http :3000/messages message=testData"
      )
  );

app.listen(port, () => {
  console.log(`Server Started and running on port: ${port}`);
});
