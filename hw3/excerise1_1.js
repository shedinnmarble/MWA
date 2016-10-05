var http = require("http"),
    fs = require("fs");
http.createServer(function (req, res) {
    var rs = fs.createReadStream("img.jpg").pipe(res);
}).listen(1320);