/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\config\mongoCollections.js 
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
    Senegal: getCollectionFn("Senegal"),
    India: getCollectionFn("India"),
    Nepal: getCollectionFn("Nepal"),
    Ghana: getCollectionFn("Ghana"),
    Haiti: getCollectionFn("Haiti"),
    DRC: getCollectionFn("DRC")    
};
