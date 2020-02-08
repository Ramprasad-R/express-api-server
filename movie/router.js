const { Router } = require("express");
const Movie = require("./model");
const router = new Router();
router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    next(error);
  }
});
