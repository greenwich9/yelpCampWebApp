var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seed");

app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect("mongodb://localhost/campgrounds");

seedDB();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});


app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds : allCampgrounds});
        }
    });
    // res.render("campgrounds", );
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name : name, image : image, description : description};
    // campgrounds.push(newCampground);
    Campground.create(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground)  {
        console.log(req.params.id);
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("show", {campground : foundCampground});
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("started");
});