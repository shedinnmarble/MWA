'use strict'
const http = require("http")
const fs = require("fs")
const queryString = require("querystring")

http.createServer(function (req, res) {


    if (req.method == "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        fs.createReadStream(__dirname + "/index.html").pipe(res)
    } else
     {
        var postData = '';
        var postDataText;
        req.setEncoding("utf8")
        req.addListener("data", function (chunk) {
            postData += chunk;
        })
        req.addListener("end", function () {
             console.log(postData)
            postDataText = queryString.parse(postData);
            console.log(postDataText)
            fs.writeFileSync(__dirname+"/body.txt",JSON.stringify(postDataText))
        })


        res.end("already get your data")
    }
    //res.end("<h1>Already get the data</h1>")
}).listen(8089)