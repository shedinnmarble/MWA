var fs = require("fs")
var path = require("path")

//print content length
var content = fs.readFile(path.join(__dirname, "cs572.txt"), 'utf8', function (err, data) {
    console.log("Content Length ", data.length)
})

//read a chunk
var readStream = fs.createReadStream(path.join(__dirname, "cs572.txt"), "utf8");
readStream.on("data", function (chunk) {
     console.log("read from chunk")
    for (var i = 10; i <= 14; ++i) {
        console.log(chunk[i])
    }

})
//overwrite content
var overwriteContext="ABCDEFGHIJKLMKOPQRSTUVWXYZ1234567890";
fs.writeFile(path.join(__dirname, "cs572.txt"),overwriteContext,function(err){
    console.log(err)
    console.log("done")
})

//append file
fs.appendFile("cs572.txt","abc");

//change byte at 10


