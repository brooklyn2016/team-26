/* Name: Jason Mohammad Sarwar
 * CS 546
 * Lab 5 - A Recipe API
 * October 24, 2016
 * routes\comments.js
 */

const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;

router.get("/:commentId", (req, res) => {
    commentsData.getCommentById(req.params.commentId).then((comment) => {
        res.json(comment);
    }, (error) => {
        // Not found!
        res.status(404).json({message: "not found!"});
    });
});

router.get("/recipe/:recipeId", (req, res) => {
    commentsData.getAllComments(req.params.recipeId).then((comment) => {
        res.json(comment);
    }, (error) => {
        // Not found!
        res.status(404).json({message: "not found!"});
    });
});

router.get("/", (req, res) => {
    /*
    hobbiesData.getAllHobbyNames().then((hobbies) => {
        res.json(hobbies);
    }, () => {
        // Something went wrong with the server!
        res.status(500).send();
    });
    */
});

router.post("/:recipeId", (req, res) => {
    commentsData.addComment(req.params.recipeId, req.body.poster, req.body.comment).then((comment) => {
        res.json(comment);
    }, (error) => {
        res.status(500).json({message: "unable to add comment!"});
    });
});

router.put("/:recipeId/:commentId", (req, res) => {
    
    if(!req.body){
        res.status(400).json({ error: "You must provide data to update a comment" });
        return;
    }
    
    return commentsData.getCommentById(req.params.commentId).then((getComment) => {
    console.log(getComment);
    if(!getComment) {
        res.status(400).json({ error: "Comment with given id not available" });
        return;
    }

    let updatedComment = {
        _id: getComment._id
    };

    if(req.body.poster) {
        updatedComment["poster"] = req.body.poster;  
    } else {
        updatedComment["poster"] = getComment.poster;
    }
    
    if(req.body.comment) {
        updatedComment["comment"] = req.body.comment;  
    } else {
        updatedComment["comment"] = getComment.name;
    }
    console.log(updatedComment);
    return commentsData.updateComment(req.params.recipeId, updatedComment)
        .then((comment) => {
            res.json(comment);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
    });
    
});

router.delete("/:id", (req, res) => {

    return commentsData.removeComment(req.params.id)
        .then(() => {
            res.sendStatus(200);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });

});

module.exports = router;