/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 5 - A Recipe API
 * October 24, 2016
 * data\recipes.js
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
    getAllRecords() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({}, {"_id":true, "title":true}).toArray();
        });
    },

    getRecordById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) return Promise.reject("Recipe not found");
                return recipe;
            });
        });
    },
    addRecord(recipeObj) {
        return recipes().then((recipeCollection) => {
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
            recipeObj["_id"] = uuid.v4();
        
            return recipeCollection.insertOne(recipeObj).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
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