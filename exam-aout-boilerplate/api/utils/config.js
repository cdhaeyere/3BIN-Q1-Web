require('dotenv-flow').config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;

module.exports = {
  MONGODB_URI,
  DB_NAME,
  PORT,
};
