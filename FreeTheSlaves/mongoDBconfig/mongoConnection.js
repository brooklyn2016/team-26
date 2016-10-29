/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 5 - A Recipe API
 * October 24, 2016
 * config\mongoConnections.js 
 */

const MongoClient = require("mongodb").MongoClient;;

const settings = {
    mongoConfig: {
        serverUrl: "mongodb://localhost:27017/",
        database: "lab5-recipes"
    }
};

let fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
let _connection = undefined

let connectDb = () => {
    if (!_connection) {
        _connection = MongoClient.connect(fullMongoUrl)
            .then((db) => {
                console.log("Connection Working");
                return db;
            });
    }

    return _connection;
};

module.exports = connectDb;