/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\data\users.js 
 */

const mongoCollections = require("../config/mongoCollections");

const users = mongoCollections.Users;

const uuid = require('node-uuid');

let exportedMethods = {
    
    addUser(userName, passWord) {
    
        var newUser = { 
           _id: uuid.v4()
        };
  
        
        if(userName !== undefined) {
            
            /* Check for duplicates! */
            
            newUser.userName = userName;   
        } else {
            return Promise.reject("Username not given");
        }
        
        if(passWord !== undefined) {
            newUser.passWord = passWord;   
        } else {
            return Promise.reject("Username not given");
        }
    
    
    },
    
    authenticateUser(userName, passWord) {
    
    
    },
    
}

module.exports = exportedMethods;