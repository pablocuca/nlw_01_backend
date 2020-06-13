import path from "path";

module.exports = {
  // client: "sqlite3",
  // connection: {
  //   filename: path.resolve(__dirname, "src", "database", "database.sqlite")
  // },
  client: "postgresql",
  connection: {
    host: "motty.db.elephantsql.com",
    database: process.env.DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations")
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds")
  },
  useNullAsDefault: true
};
