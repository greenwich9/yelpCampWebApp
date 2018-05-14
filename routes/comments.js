var express = require("express");
var app = express();
var Campground = require("../models/campground.js");
var Comment = require("../models/comment.js");
var router = express.Router({mergeParams: true});

//comments routing



function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkCommentOwnership(req, res, next) {
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(foundComment.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("back");
            }
           }
        });
    } else {
        res.redirect("back");
    }
}

router.get("/new", isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground : foundCampground});
            // res.redirect("/campgrounds/:id/");
        }
    });
    
});
router.post("/", isLoggedIn, function(req, res){
    // var name = req.body.name;
    // var image = req.body.image;
    // var description = req.body.description;
    // var newCampground = {name : name, image : image, description : description};
    // campgrounds.push(newCampground);
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            
            console.log(err);
        } else {
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                }
            });
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

router.get("/:comment_id/edit", checkCommentOwnership, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/edit", {comment : foundComment, campground_id : req.params.id});
        }
    })
});

router.put("/:comment_id",checkCommentOwnership, function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment) {
        if (err) {
            console.log(err);
        } else {
            // res.render("comments/edit", {comment : foundComment, campground_id : req.params.id});
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});

router.delete("/:comment_id",checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if (err) {
            res.redirect("/campgrounds/" + req.params.id);
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;