var Campground = require("./models/campground");
var mongoose = require("mongoose");
var Comment = require("./models/comment");

function seedDB() {
    var campgrounds = [
            {
                name: "Salmon Creek", 
                image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg", 
                description: "a very good place that you will love"
            },
            {
                name: "Granite Hill", 
                image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
                description: "a very good place that you will love"
            },
            {
                name: "Mountain Goat's Rest", 
                image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg",
                description: "a very good place that you will love"
            },
            {
                name: "Salmon Creek", 
                image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
                description: "a very good place that you will love"
            }
    ];
    
    // var campgrounds = [
    //         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg", description: "a very good place that you will love"}
    // ];
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("campgrounds removed");
        }
    })
    campgrounds.forEach(function(camp){
        Campground.create(camp, function(err, camp) {
            if (err) {
                console.log(err);
            } else {
                var com = {
                    text : "very good place to go",
                    author : "Einstein"
                };
                Comment.create(com, function(err, com) {
                    if (err) {
                        console.log(err);
                    } else {
                        camp.comments.push(com);
                        camp.save();
                        console.log("Campground Created");
                        console.log(camp);
                    }
                }) 
                
            }
        });
    });
}

module.exports = seedDB;

