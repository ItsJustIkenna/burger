const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;
const exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./controllers/burgers_controller"));

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
