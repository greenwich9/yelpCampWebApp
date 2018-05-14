{"filter":false,"title":"index.js","tooltip":"/routes/index.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":27},"end":{"row":14,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"fa70796f699c5718da4d22c04ff10603ade0e12e","undoManager":{"mark":38,"position":38,"stack":[[{"start":{"row":0,"column":0},"end":{"row":41,"column":0},"action":"insert","lines":["app.get(\"/\", function(req, res) {","    res.render(\"landing\");","});","","","app.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","","","app.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           res.redirect(\"/campgrounds\"); ","        });","    });","});","","","app.get(\"/login\", function(req, res){","   res.render(\"login\"); ","});","","","app.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});","","","app.get(\"/logout\", function(req, res){","   req.logout();","   res.redirect(\"/campgrounds\");","});",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":46},"action":"insert","lines":["var express = require(\"express\");","var app = express();","var Campground = require(\"../models/campground.js\");","var Comment = require(\"../models/comment.js\");"],"id":3}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":46},"action":"remove","lines":["var Comment = require(\"../models/comment.js\");"],"id":4}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":14},"action":"remove","lines":["Campground"],"id":5},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["U"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["s"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["e"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":40},"action":"remove","lines":["campground"],"id":6},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["u"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["s"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["e"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":40},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":8},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["p"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["a"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["s"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["pass"],"id":9},{"start":{"row":3,"column":4},"end":{"row":3,"column":12},"action":"insert","lines":["passport"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":[" "],"id":10},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":[" "],"id":11},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["r"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["e"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["q"]}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":18},"action":"remove","lines":["req"],"id":12},{"start":{"row":3,"column":15},"end":{"row":3,"column":26},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["p"],"id":13},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["a"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["s"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["s"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["p"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["o"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["r"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":[";"],"id":14}],[{"start":{"row":3,"column":35},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":15},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["v"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["a"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":[" "],"id":16},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["R"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["o"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["u"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["t"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["e"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":[" "],"id":17},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":[" "],"id":18},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["e"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["x"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["p"],"id":19},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["r"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":18},"action":"remove","lines":["expre"],"id":20},{"start":{"row":4,"column":13},"end":{"row":4,"column":20},"action":"insert","lines":["express"]}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["."],"id":21}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["R"],"id":22},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["o"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["u"]}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":24},"action":"remove","lines":["Rou"],"id":23},{"start":{"row":4,"column":21},"end":{"row":4,"column":27},"action":"insert","lines":["Router"]}],[{"start":{"row":4,"column":27},"end":{"row":4,"column":29},"action":"insert","lines":["()"],"id":24}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":[";"],"id":25}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"remove","lines":["R"],"id":26}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["r"],"id":27}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["app"],"id":28},{"start":{"row":8,"column":0},"end":{"row":8,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["app"],"id":29},{"start":{"row":13,"column":0},"end":{"row":13,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"remove","lines":["app"],"id":30},{"start":{"row":18,"column":0},"end":{"row":18,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"remove","lines":["app"],"id":31},{"start":{"row":32,"column":0},"end":{"row":32,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["app"],"id":32},{"start":{"row":37,"column":0},"end":{"row":37,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["app"],"id":33},{"start":{"row":45,"column":0},"end":{"row":45,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":48,"column":3},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":["m"]},{"start":{"row":50,"column":1},"end":{"row":50,"column":2},"action":"insert","lines":["o"]},{"start":{"row":50,"column":2},"end":{"row":50,"column":3},"action":"insert","lines":["d"]},{"start":{"row":50,"column":3},"end":{"row":50,"column":4},"action":"insert","lines":["u"]},{"start":{"row":50,"column":4},"end":{"row":50,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":50,"column":4},"end":{"row":50,"column":5},"action":"remove","lines":["e"],"id":35}],[{"start":{"row":50,"column":4},"end":{"row":50,"column":5},"action":"insert","lines":["l"],"id":36},{"start":{"row":50,"column":5},"end":{"row":50,"column":6},"action":"insert","lines":["e"]},{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"insert","lines":["."]},{"start":{"row":50,"column":7},"end":{"row":50,"column":8},"action":"insert","lines":["e"]},{"start":{"row":50,"column":8},"end":{"row":50,"column":9},"action":"insert","lines":["x"]},{"start":{"row":50,"column":9},"end":{"row":50,"column":10},"action":"insert","lines":["p"]}],[{"start":{"row":50,"column":7},"end":{"row":50,"column":10},"action":"remove","lines":["exp"],"id":37},{"start":{"row":50,"column":7},"end":{"row":50,"column":14},"action":"insert","lines":["exports"]}],[{"start":{"row":50,"column":14},"end":{"row":50,"column":15},"action":"insert","lines":[" "],"id":38},{"start":{"row":50,"column":15},"end":{"row":50,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":50,"column":16},"end":{"row":50,"column":17},"action":"insert","lines":[" "],"id":39},{"start":{"row":50,"column":17},"end":{"row":50,"column":18},"action":"insert","lines":["r"]},{"start":{"row":50,"column":18},"end":{"row":50,"column":19},"action":"insert","lines":["o"]},{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"insert","lines":["u"]},{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"insert","lines":["t"]},{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"insert","lines":["e"]},{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"insert","lines":["r"]},{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"insert","lines":[";"]}]]},"timestamp":1526252375848}