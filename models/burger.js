const orm = require("../config/orm.js");

orm.selectAll("burger_name");

orm.insertOne("Baconator");

orm.updateOne("The ShackBurger", "Big Mac");

module.exports = orm;