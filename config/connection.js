const mysql = require("mysql");

let Connection;

if (process.env.JAWSDB_URL) {
  Connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    Connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db",
  });
}

Connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + Connection.threadId);
});

module.exports = Connection;
