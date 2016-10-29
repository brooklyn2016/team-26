/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 4 - About Me API
 * October 10, 2016
 * task\seed.js
 */

const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const countryData = data.country;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then(() => {
            
    }).then(() => {
        
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});