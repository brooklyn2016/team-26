/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDBconfig\mongoCollections.js 
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
    senegal: getCollectionFn("Senegal"),
    india: getCollectionFn("India"),
    nepal: getCollectionFn("Nepal"),
    ghana: getCollectionFn("Ghana"),
    haiti: getCollectionFn("Haiti"),
    drc: getCollectionFn("DRC")    
};
