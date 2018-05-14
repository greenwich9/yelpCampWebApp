var express = require("express");
var app = express();
var Campground = require("../models/campground.js");
var Comment = require("../models/comment.js");
var router = express.Router({mergeParams: true});

//comments routing

function checkCampgroundOwnership(req, res, next) {
 if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the campground?
            if(foundCampground.author.id.equals(req.user._id)) {
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

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
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

module.exports = router;