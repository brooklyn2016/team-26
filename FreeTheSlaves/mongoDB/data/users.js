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
        
        return users().then((userCollection) => {            
            return userCollection.insertOne(newUser).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            });
        });


    },
    
    getAllUsers() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },
        
    authenticateUser(username, password) {
        
        console.log("Username: " + typeof username);
        if(username == undefined)
            return Promise.reject("Username not given");

        if(password == undefined)
            return Promise.reject("Password not given");
    
        return users().then((usersCollection) => {
            return usersCollection.findOne({ userName: username }).then((user) => {
                if (!user) {
                    return Promise.reject("Username does not exist");
                } else {
                    if(user.passWord !== password) {
                        return Promise.reject("Wrong Password");
                    } else {
                        return true;   
                    }
                }
            });
        });
    },
    
}

module.exports = exportedMethods;