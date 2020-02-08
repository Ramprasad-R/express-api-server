const { DataTypes } = require("sequelize");
const db = require("../db");
const Movie = db.define("movie", {
  title: DataTypes.TEXT,
  yearOfRelease: DataTypes.INTEGER,
  synopsis: DataTypes.TEXT
});
console.log(Movies.findAll());

module.exports = Movie;
