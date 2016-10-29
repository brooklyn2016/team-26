/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 5 - A Recipe API
 * October 24, 2016
 * routes\index.js
 */

const SenegalRoutes = require("./senegal");
const IndiaRoutes = require("./india");
const NepalRoutes = require("./nepal");
const GhanaRoutes = require("./ghana");
const HaitiRoutes = require("./haiti");
const DRCRoutes = require("./drc");


const constructorMethod = (app) => {
    app.use("/senegal", SenegalRoutes);
    app.use("/india", IndiaRoutes);
    app.use("/nepal", NepalRoutes);
    app.use("/ghana", GhanaRoutes);
    app.use("/haiti", HaitiRoutes);
    app.use("/drc", DRCRoutes);
    
    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;