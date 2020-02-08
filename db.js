const Sequelize = require("sequelize");
const databaseUrl = process.env.DATABASE_URL;
const db = new Sequelize(databaseUrl);
// const dbConnectSync = async () => {
//   try {
//     await db.sync();
//     console.log("Database schema updated");
//   } catch (error) {
//     console.log(error);
//   }
// };
// dbConnectSync();

db.sync()
  .then(() => console.log("Database schema updated"))
  .catch(console.error);
module.exports = db;
