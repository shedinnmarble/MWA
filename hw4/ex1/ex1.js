const http = require("http");
const fs = require('fs')
const queryString = require('querystring');
http.createServer(function (request, response) {
    // fs.createReadStream()
    const path = __dirname + request.url;
    console.log(path)
    if (fs.existsSync(path)) {
        if (fs.statSync(path).isFile()) {
            fs.createReadStream(path).pipe(response)
        } else {
            console.log("no such file+" + path)
            response.end("no such file")
        }
    }
}).listen(8080)