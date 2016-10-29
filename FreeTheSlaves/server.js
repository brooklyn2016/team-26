const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configureRoutes = require("./routes");

app.use(bodyParser.json());
configureRoutes(app);


app.listen(3000, () => {
    console.log("We got a a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
    