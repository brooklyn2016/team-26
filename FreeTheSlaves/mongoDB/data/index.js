/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\data\index.js 
 */

const CountryData = require("./country");
const UsersData = require("./users");

module.exports = {
    country: CountryData,
    Users: UsersData,
    
};