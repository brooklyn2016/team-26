/* Code For Good 2016
 * Free the Slaves
 * MongoDB Setup
 * October 28, 2016
 * mongoDB\route\country.js 
 */

const express = require('express');
const router = express.Router();
const data = require("../data");
const countryData = data.country;

router.get("/:country", (req, res) => {
    countryData.getAllRecords(req.params.country).then((record) => {
        res.json(record);
    }, (error) => {
        // Not found!
        res.status(404).json({message: "not found!"});
    });
});

router.get("/:country/:id", (req, res) => {
    countryData.getRecordById(req.params.country, req.params.id).then((record) => {
        res.json(record);
    }, (error) => {
        // Not found!
        res.status(404).json({message: "not found!"});
    });
});

router.post("/", (req, res) => {
    
    if(!req.body.country) {
        res.status(400).json({message: "country not given!"});
    } else {
    
        countryData.addRecord(req.body).then((record) => {
            res.json(record);
        }, (error) => {
            res.status(500).json({message: "unable to add record!"});
        });
    }
});

/*
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

*/

router.delete("/:country/:id", (req, res) => {

    return countryData.removeRecord(req.params.country, req.params.id)
        .then(() => {
            res.sendStatus(200);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });

});



module.exports = router;