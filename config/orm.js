const connection = require("./connection.js");

const orm = {
  selectAll: function (tableInput) {
    let queryString = `SELECT * FROM ??`;
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function (burgerName) {
    let queryString = `INSERT INTO burgers (burger_name) VALUES ("?")`;
    connection.query(queryString, [burgerName], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function (newName, burgerName) {
    let queryString = `UPDATE burgers SET burger_name = '?' WHERE burger_name = '?'`;
    connection.query(
      queryString,
      [newName, burgerName],
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
