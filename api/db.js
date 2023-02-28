import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "x2Nv9zDnv4",
  database: "blog",
});
