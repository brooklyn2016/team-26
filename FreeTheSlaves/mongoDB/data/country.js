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
        
        let newRecord = {
              _id: uuid.v4()
        };
        
        if(!jsonObj.A) {
            newRecord["A"] = jsonObj.A;   
        } else {
            return Promise.reject("Section A not given");
        }
        
        if(!jsonObj.B) {
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
        
        
        
            /*
            let newRecipe = {
                _id: uuid.v4()
            }
            
            if(updatedRecipe.title) {
                newRecipe["title"] = recipeObj.title;  
            } else {
                return Promise.reject("No title given");
            }
            
            if(updatedRecipe.ingredients) {
                newRecipe["ingredients"] = recipeObj.ingredients;  
            }
        
            if(updatedRecipe.steps) {
                newRecipe["steps"] = recipeObj.steps;  
            }
        
            if(updatedRecipe.comments) {
                newRecipe["comments"] = recipeObj.comments;  
            }            
            */
        
        if(jsonObj.country === "Senegal") {
            return Senegal().then((SenegalCollection) => {            
                return SenegalCollection.insertOne(newRecord).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "India") {
            return India().then((IndiaCollection) => {            
                return IndiaCollection.insertOne(newRecord).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "Nepal") {
            return Nepal().then((NepalCollection) => {            
                return NepalCollection.insertOne(newRecord).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "Ghana") {
            return Ghana().then((GhanaCollection) => {            
                return GhanaCollection.insertOne(newRecord).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "Haiti") {
            return Haiti().then((HaitiCollection) => {            
                return HaitiCollection.insertOne(newRecord).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        } else if(jsonObj.country === "DRC") {
            return DRC().then((DRCCollection) => {            
                return DRCCollection.insertOne(newRecord).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecordById(jsonObj.country, newId);
                });
            });
        }


    },
    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject("Could not delete recipe with id of ${id}")
                }
            });
        });
    },
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
}

module.exports = exportedMethods;