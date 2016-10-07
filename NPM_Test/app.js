var http = require("http"),
    fs = require("fs");
http.createServer(function (req, res) {
    //use pipe
    var rs = fs.createReadStream("img.jpg").pipe(res);
    debugger
}).listen(1320);