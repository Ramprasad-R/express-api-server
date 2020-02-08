const { DataTypes } = require("sequelize");
const db = require("../db");
const Movie = db.define("movie", {
  title: DataTypes.TEXT,
  yearOfRelease: DataTypes.INTEGER,
  synopsis: DataTypes.TEXT
});

db.sync()
  .then(() => {
    console.log("Database schema updated");
    seedData();
  })
  .catch(console.error);

const seedData = async () => {
  const getMovieList = await Movie.findAll();
  const gotMovieList = getMovieList.map(movie => movie.get());
  if (gotMovieList.length < 1) {
    Movie.sync().then(() => {
      Movie.create({
        title: "The Shawshank Redemption",
        yearOfRelease: 1994,
        synopsis:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      });
      Movie.create({
        title: "Gladiator",
        yearOfRelease: 2000,
        synopsis:
          "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
      });
      Movie.create({
        title: "One Flew Over the Cuckoo's Nest",
        yearOfRelease: 1975,
        synopsis:
          "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients."
      });
    });
  }
};

module.exports = Movie;
