/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 5 - A Recipe API
 * October 24, 2016
 * config\mongoCollections.js 
 */

const dbConnection = require("./mongoConnection");

let getCollectionFn = (collection) => {
    let _col = undefined;

    return () => {
        if (!_col) {
            _col = dbConnection().then(db => {
                return db.collection(collection);
            });
        }

        return _col;
    }
}

module.exports = {
    recipes: getCollectionFn("recipes"),
    comments: getCollectionFn("comments")
};
