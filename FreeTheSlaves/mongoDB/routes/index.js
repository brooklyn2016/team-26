/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\route\index.js 
 */

const CountryRoutes = require("./country");


const constructorMethod = (app) => {
    app.use("/country", CountryRoutes);
    
    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;