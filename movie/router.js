const { Router } = require("express");
const Movie = require("./model");
const router = new Router();
router
  .get("/movies", async (req, res, next) => {
    try {
      const limit = req.query.limit || 2;
      const offset = req.query.offset || 0;

      const movies = await Movie.findAndCountAll({ limit, offset });
      res.send({ data: movies.rows, total: movies.count });
    } catch (error) {
      next(error);
    }
  })
  .get("/movies/:id", async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        res.status(404).send("Movie Not Found");
      } else {
        res.send(movie);
      }
    } catch (error) {
      next(error);
    }
  })
  .post("/movies", async (req, res, next) => {
    try {
      const movies = await Movie.create(req.body);
      res.send(movies);
    } catch (error) {
      next(error);
    }
  })

  .put("/movies/:id", async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        res.status(404).send("Movie Not Found");
      } else {
        const updatedMovie = await movie.update(req.body);
        res.send(updatedMovie);
      }
    } catch (error) {
      next(error);
    }
  })
  .delete("/movies/:id", async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        res.status(404).send("Movie Not Found");
      } else {
        await Movie.destroy({ where: { id: movieId } });
        res.status(200).send("Movie Deleted");
      }
    } catch (error) {
      next(error);
    }
  })
  .get("*", (req, res) =>
    res.status(404).send("Content not found, check the url")
  );

module.exports = router;
