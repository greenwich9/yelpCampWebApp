{"changed":true,"filter":false,"title":"app.js","tooltip":"/app.js","value":"var express = require(\"express\");\nvar app = express();\n\napp.set(\"view engine\", \"ejs\");\n\napp.get(\"/\", function(req, res) {\n    res.render(\"landing\");\n});\n\nvar campgrounds = [\n        {name: \"Salmon Creek\", image: \"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg\"},\n        {name: \"Granite Hill\", image: \"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg\"},\n        {name: \"Mountain Goat's Rest\", image: \"https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg\"},\n        {name: \"Salmon Creek\", image: \"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg\"},\n        {name: \"Granite Hill\", image: \"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg\"},\n        {name: \"Mountain Goat's Rest\", image: \"https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg\"},\n        {name: \"Salmon Creek\", image: \"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg\"},\n        {name: \"Granite Hill\", image: \"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg\"},\n        {name: \"Mountain Goat's Rest\", image: \"https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg\"}\n];\n\napp.get(\"/campgrounds\", function(req, res) {\n    res.render(\"campgrounds\", {campgrounds : campgrounds});\n});\n\napp.post(\"/campgrouonds\", function(req, res){\n    \n});\n\napp.listen(process.env.PORT, process.env.IP, function() {\n    console.log(\"started\");\n});","undoManager":{"mark":83,"position":100,"stack":[[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["q"],"id":71},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":[","]}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":[" "],"id":72},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["r"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["e"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["e"],"id":73},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"remove","lines":["r"],"id":74},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"remove","lines":["e"]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["r"],"id":75},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"remove","lines":["s"],"id":76}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["e"],"id":77},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["s"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["."]}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"remove","lines":[")"],"id":78}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":[")"],"id":79}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"remove","lines":["r"],"id":80},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"remove","lines":["e"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"remove","lines":["d"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"remove","lines":["n"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"remove","lines":["e"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["r"]}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["s"],"id":81},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["n"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":82},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["a"],"id":83},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["p"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["p"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["."]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["s"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["e"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":9},"action":"insert","lines":["()"],"id":84}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["v"],"id":85},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["i"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["e"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["w"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"],"id":86},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["n"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["g"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["i"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["n"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":18},"action":"remove","lines":["viewengine"],"id":87}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":10},"action":"insert","lines":["\"\""],"id":88}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["v"],"id":89},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["i"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["e"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["w"]}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":[" "],"id":90},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["e"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["n"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["g"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["i"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["n"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":[","],"id":91}],[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":[" "],"id":92},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["e"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["j"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"remove","lines":["s"],"id":93},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["j"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"remove","lines":["e"]}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":25},"action":"insert","lines":["\"\""],"id":94}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["e"],"id":95},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["j"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":[";"],"id":96}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":12},"action":"remove","lines":["send"],"id":97},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["r"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["e"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["n"]},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["d"]},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["e"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":34},"action":"remove","lines":["\"your landing page\""],"id":98}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["."],"id":99},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["/"]}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["v"],"id":100},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["i"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["e"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["w"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["/"]}],[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["l"],"id":101},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["a"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["n"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["d"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["i"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["n"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["g"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"remove","lines":["."],"id":102}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["."],"id":103}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":17},"action":"insert","lines":["\"\""],"id":104}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"remove","lines":["\""],"id":105}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["\""],"id":106}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":23},"action":"remove","lines":["./view/"],"id":107}],[{"start":{"row":7,"column":3},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":108},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["a"],"id":109},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["p"]},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["p"]},{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["."]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["g"]},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["e"]},{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":9},"action":"insert","lines":["()"],"id":110}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":[":"],"id":111}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":[":"],"id":112}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":10},"action":"insert","lines":["\"\""],"id":113}],[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["/"],"id":114},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["c"]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["a"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["m"]},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["p"]}],[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["g"],"id":115},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["r"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["o"]},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["u"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["n"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["d"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":[","],"id":116}],[{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":[" "],"id":117},{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["f"]},{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["u"]},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["n"]},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["c"]},{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["t"]},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["i"]},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["o"]},{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["n"]}],[{"start":{"row":9,"column":32},"end":{"row":9,"column":34},"action":"insert","lines":["()"],"id":118}],[{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["r"],"id":119},{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"insert","lines":["e"]},{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"remove","lines":["s"],"id":120}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["q"],"id":121},{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":[","]}],[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":[" "],"id":122},{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["r"]},{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["e"]},{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["s"]}],[{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":[" "],"id":123}],[{"start":{"row":9,"column":43},"end":{"row":9,"column":45},"action":"insert","lines":["{}"],"id":124}],[{"start":{"row":9,"column":44},"end":{"row":11,"column":0},"action":"insert","lines":["","    ",""],"id":125}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["r"],"id":126},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["e"]},{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["."],"id":127}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["r"],"id":128},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["e"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["n"]},{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["d"]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["e"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":10,"column":14},"end":{"row":10,"column":16},"action":"insert","lines":["()"],"id":129}],[{"start":{"row":10,"column":15},"end":{"row":10,"column":17},"action":"insert","lines":["\"\""],"id":130}],[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["c"],"id":131},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["a"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["m"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["p"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["g"]}],[{"start":{"row":10,"column":16},"end":{"row":10,"column":21},"action":"remove","lines":["campg"],"id":132},{"start":{"row":10,"column":16},"end":{"row":10,"column":27},"action":"insert","lines":["campgrounds"]}],[{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"insert","lines":[","],"id":133}],[{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"insert","lines":[" "],"id":134}],[{"start":{"row":10,"column":30},"end":{"row":10,"column":32},"action":"insert","lines":["{}"],"id":135}],[{"start":{"row":10,"column":31},"end":{"row":10,"column":32},"action":"insert","lines":["c"],"id":136},{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["a"]},{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["m"]},{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["p"]},{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["g"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["r"]},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["o"]},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["u"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["n"]},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["d"]}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":[" "],"id":137}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"remove","lines":[" "],"id":138}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":["s"],"id":139}],[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":[" "],"id":140},{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":[":"]}],[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":[" "],"id":141}],[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["c"],"id":142},{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["a"]},{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["m"]},{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":["p"]}],[{"start":{"row":10,"column":45},"end":{"row":10,"column":49},"action":"remove","lines":["camp"],"id":143},{"start":{"row":10,"column":45},"end":{"row":10,"column":56},"action":"insert","lines":["campgrounds"]}],[{"start":{"row":10,"column":58},"end":{"row":10,"column":59},"action":"insert","lines":[";"],"id":144}],[{"start":{"row":7,"column":3},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":145},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["v"],"id":146},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["a"]},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":[" "],"id":147},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["c"]},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["a"]},{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["m"]},{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["p"]}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"remove","lines":["camp"],"id":148},{"start":{"row":9,"column":4},"end":{"row":9,"column":15},"action":"insert","lines":["campgrounds"]}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":[" "],"id":149},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["="]}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":[" "],"id":150}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":20},"action":"insert","lines":["[]"],"id":151}],[{"start":{"row":9,"column":19},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":152},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":18},"end":{"row":10,"column":5},"action":"remove","lines":["[","    ]"],"id":153},{"start":{"row":9,"column":18},"end":{"row":19,"column":2},"action":"insert","lines":["var campgrounds = [","        {name: \"Salmon Creek\", image: \"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg\"},","        {name: \"Granite Hill\", image: \"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg\"},","        {name: \"Mountain Goat's Rest\", image: \"https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg\"},","        {name: \"Salmon Creek\", image: \"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg\"},","        {name: \"Granite Hill\", image: \"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg\"},","        {name: \"Mountain Goat's Rest\", image: \"https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg\"},","        {name: \"Salmon Creek\", image: \"https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg\"},","        {name: \"Granite Hill\", image: \"https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg\"},","        {name: \"Mountain Goat's Rest\", image: \"https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg\"}","];"]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":18},"action":"remove","lines":["var campgrounds = "],"id":154}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"insert","lines":[";"],"id":155}],[{"start":{"row":23,"column":3},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":156},{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["a"]},{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["p"]},{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["p"]},{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["."]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["p"],"id":157},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["o"]},{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["s"]},{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":10},"action":"insert","lines":["()"],"id":158}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":11},"action":"insert","lines":["\"\""],"id":159}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["/"],"id":160},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["c"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["a"]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["m"]},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["p"]},{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["g"]},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["r"]},{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["o"]}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["u"],"id":161},{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["o"]},{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["n"]},{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["d"]},{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":[","],"id":162}],[{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":[" "],"id":163},{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["f"]},{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":["u"]},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":["n"]},{"start":{"row":25,"column":29},"end":{"row":25,"column":30},"action":"insert","lines":["c"]},{"start":{"row":25,"column":30},"end":{"row":25,"column":31},"action":"insert","lines":["t"]},{"start":{"row":25,"column":31},"end":{"row":25,"column":32},"action":"insert","lines":["i"]},{"start":{"row":25,"column":32},"end":{"row":25,"column":33},"action":"insert","lines":["o"]},{"start":{"row":25,"column":33},"end":{"row":25,"column":34},"action":"insert","lines":["n"]}],[{"start":{"row":25,"column":34},"end":{"row":25,"column":36},"action":"insert","lines":["()"],"id":164}],[{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["r"],"id":165},{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["e"]},{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["q"]},{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":[","]}],[{"start":{"row":25,"column":39},"end":{"row":25,"column":40},"action":"insert","lines":[" "],"id":166},{"start":{"row":25,"column":40},"end":{"row":25,"column":41},"action":"insert","lines":["r"]},{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"insert","lines":["e"]},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["s"]}],[{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"insert","lines":[" "],"id":167},{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"insert","lines":["{"]}],[{"start":{"row":25,"column":47},"end":{"row":27,"column":1},"action":"insert","lines":["","    ","}"],"id":168}],[{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"remove","lines":[")"],"id":169}],[{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"remove","lines":[" "],"id":170}],[{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"insert","lines":[")"],"id":171},{"start":{"row":27,"column":2},"end":{"row":27,"column":3},"action":"insert","lines":[";"]}]]},"ace":{"folds":[],"scrolltop":240,"scrollleft":0,"selection":{"start":{"row":26,"column":4},"end":{"row":26,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1526050729029}