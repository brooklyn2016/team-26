/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\config\mongoConnections.js 
 */

const MongoClient = require("mongodb").MongoClient;;

const settings = {
    mongoConfig: {
        serverUrl: "mongodb://localhost:27017/",
        database: "Free_the_Slaves"
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