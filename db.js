const Sequelize = require("sequelize");
const databaseUrl = process.env.DATABASE_URL || process.env.DEV_DATABASE_URL;
const db = new Sequelize(databaseUrl);

module.exports = db;
