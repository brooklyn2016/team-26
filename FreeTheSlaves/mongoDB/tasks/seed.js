/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 4 - About Me API
 * October 10, 2016
 * task\seed.js
 */

const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const recipeData = data.recipes;
const commentsData = data.comments;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then(() => {
        let obj = { 
          _id: "bd8fa389-3a7a-4478-8845-e36a02de1b7b",
          title: "Fried Eggs",
          ingredients: [
            {
              name: "Egg",
              amount: "2 eggs"
            },
            {
              name: "Olive Oil",
              amount: "2 tbsp"
            },
          ],
          steps: [
            "First, heat a non-stick pan on medium-high until hot",
            "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
            "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
            "Gently pour the egg from the bowl onto the oil",    
            "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
            "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
            "Remove from oil and plate",
            "Repeat for second egg"
          ],
          comments: []
        };
          return recipeData.addRecipe(obj);
            
    }).then((recipe) => {
        return addComment(recipe._id, "Jason Sarwar", "This is great!");
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});