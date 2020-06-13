import knex from "knex";
import path from "path";
import dotenv from 'dotenv'

dotenv.config();

const connection = knex({
  // client: "sqlite3",
  // connection: {
  //   filename: path.resolve(__dirname, "database.sqlite")
  // },
  client: "postgresql",
  connection: {
    host: "motty.db.elephantsql.com",
    database: process.env.DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD
  },
  useNullAsDefault: true
});

export default connection;
