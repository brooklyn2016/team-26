const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configureRoutes = require("./mongoDB/routes");

app.use(bodyParser.json());
configureRoutes(app);

app.get("/", function (request, response) {
    response.render("../index.html");
});

app.listen(3000, () => {
    console.log("We got a a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
    