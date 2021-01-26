const mysql = require("mysql");

const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db",
});

Connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + Connection.threadId);
});

module.exports = Connection;