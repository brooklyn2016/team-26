/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\data\country.js 
 */
const mongoCollections = require("../config/mongoCollections");

const Senegal = mongoCollections.Senegal;
const India = mongoCollections.India;
const Nepal = mongoCollections.Nepal;
const Ghana = mongoCollections.Ghana;
const Haiti = mongoCollections.Haiti;
const DRC = mongoCollections.DRC;

const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecords(country) {
        if(country === "Senegal") {
            return Senegal().then((SenegalCollection) => {
                return SenegalCollection.find({}).toArray();
            });
        } else if(country === "India") {
            return India().then((IndiaCollection) => {
                return IndiaCollection.find({}).toArray();
            });
        } else if(country === "Nepal") {
            return Nepal().then((NepalCollection) => {
                return NepalCollection.find({}).toArray();
            });
        } else if(country === "Ghana") {
            return Ghana().then((GhanaCollection) => {
                return GhanaCollection.find({}).toArray();
            });
        } else if(country === "Haiti") {
            return Haiti().then((HaitiCollection) => {
                return HaitiCollection.find({}).toArray();
            });
        } else if(country === "DRC") {
            return DRC().then((DRCCollection) => {
                return DRCCollection.find({}).toArray();
            });
        }
        
    },

    getRecordById(country, id) {
    
        if(country === "Senegal") {
            return Senegal().then((SenegalCollection) => {
                return SenegalCollection.findOne({ _id: id }).then((record) => {
                    if (!record) return Promise.reject("Record not found");
                    return record;
                });
            });
        } else if(country === "India") {
            return India().then((IndiaCollection) => {
                return IndiaCollection.findOne({ _id: id }).then((record) => {
                    if (!record) return Promise.reject("Record not found");
                    return record;
                });
            });
        } else if(country === "Nepal") {
            return Nepal().then((NepalCollection) => {
                return NepalCollection.findOne({ _id: id }).then((record) => {
                    if (!record) return Promise.reject("Record not found");
                    return record;
                });
            });
        } else if(country === "Ghana") {
            return Ghana().then((GhanaCollection) => {
                return GhanaCollection.findOne({ _id: id }).then((record) => {
                    if (!record) return Promise.reject("Record not found");
                    return record;
                });
            });
        } else if(country === "Haiti") {
            return Haiti().then((HaitiCollection) => {
                return HaitiCollection.findOne({ _id: id }).then((record) => {
                    if (!record) return Promise.reject("Record not found");
                    return record;
                });
            });
        } else if(country === "DRC") {
            return DRC().then((DRCCollection) => {
                return DRCCollection.findOne({ _id: id }).then((record) => {
                    if (!record) return Promise.reject("Record not found");
                    return record;
                });
            });
        }
    
    },
        
    addRecord(jsonObj) {
        
        /*
        var newRecord = { 
           _id: uuid.v4()
        };
  
        
        if(jsonObj.community !== undefined) {
            newRecord.community = jsonObj.community;   
        } else {
            return Promise.reject("Community not given");
        }
        
        if(jsonObj.population !== undefined) {
            newRecord.population = jsonObj.population;   
        } else {
            return Promise.reject("Population not given");
        }
        
        
        if(jsonObj.date !== undefined) {
            newRecord["date"] = jsonObj.date;   
        } else {
            return Promise.reject("Date not given");
        }        
        
        if(jsonObj.A !== undefined) {
            newRecord["A"] = jsonObj.A;   
        } else {
            return Promise.reject("Section A not given");
        }
        
        if(jsonObj.B !== undefined) {
            newRecord["B"] = jsonObj.B;   
        } else {
            return Promise.reject("Section B not given");
        }
        
        
        if(!jsonObj.C) {
            newRecord["C"] = jsonObj.C;   
        } else {
            return Promise.reject("Section C not given");
        }
        
        if(!jsonObj.D) {
            newRecord["D"] = jsonObj.D;   
        } else {
            return Promise.reject("Section D not given");
        }
        
        if(!jsonObj.E) {
            newRecord["E"] = jsonObj.E;   
        } else {
            return Promise.reject("Section E not given");
        }
        
        if(!jsonObj.F) {
            newRecord["F"] = jsonObj.F;   
        } else {
            return Promise.reject("Section F not given");
        }
        
        if(!jsonObj.G) {
            newRecord["G"] = jsonObj.G;   
        } else {
            return Promise.reject("Section G not given");
        }
        */
        
        jsonObj["_id"] = uuid.v4();
        
        if(jsonObj.country === "Senegal") {
            return Senegal().then((SenegalCollection) => {            
                return SenegalCollection.insertOne(jsonObj).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "India") {
            console.log("We made it!");
            return India().then((IndiaCollection) => {
                console.log("We made it v2!");
                return IndiaCollection.insertOne(jsonObj).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "Nepal") {
            return Nepal().then((NepalCollection) => {            
                return NepalCollection.insertOne(jsonObj).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "Ghana") {
            return Ghana().then((GhanaCollection) => {            
                return GhanaCollection.insertOne(jsonObj).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "Haiti") {
            return Haiti().then((HaitiCollection) => {            
                return HaitiCollection.insertOne(jsonObj).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "DRC") {
            return DRC().then((DRCCollection) => {            
                return DRCCollection.insertOne(jsonObj).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else {
             return Promise.reject("Invalid Country");   
        }


    },
        
    removeRecord(country, id) {

        if(country === "Senegal") {
            return Senegal().then((SenegalCollection) => {
                return SenegalCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete record")
                    }
                });
            });
        } else if(country === "India") {
            return India().then((IndiaCollection) => {
                return IndiaCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete record")
                    }
                });
            });
        } else if(country === "Nepal") {
            return Nepal().then((NepalCollection) => {
                return NepalCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete record")
                    }
                });
            });
        } else if(country === "Ghana") {
            return Ghana().then((GhanaCollection) => {
                return GhanaCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete record")
                    }
                });
            });
        } else if(country === "Haiti") {
            return Haiti().then((HaitiCollection) => {
                return HaitiCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete record")
                    }
                });
            });
        } else if(country === "DRC") {
            return DRC().then((DRCCollection) => {
                return DRCCollection.removeOne({ _id: id }).then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        return Promise.reject("Could not delete record")
                    }
                });
            });
        }


    },
    
    
    /*
    updateRecipe(id, recipeObj) {
        return recipes().then((recipeCollection) => { 
            
            let updatedRecipe = {};
            
            if(recipeObj.title) {
                updatedRecipe["title"] = recipeObj.title;  
            }
            
            if(recipeObj.ingredients) {
                updatedRecipe["ingredients"] = recipeObj.ingredients;  
            }
        
            if(recipeObj.steps) {
                updatedRecipe["steps"] = recipeObj.steps;  
            }
        
            if(recipeObj.comments) {
                updatedRecipe["comments"] = recipeObj.comments;  
            }            
            
            let updateCommand = { 
                $set: updatedRecipe
            };
            
            return recipeCollection.updateOne({ _id: id }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },   
    
    */
}

module.exports = exportedMethods;