var fs = require("fs")
var path = require("path")
var util = require("util");
const fsPath = path.join(__dirname, "cs572.txt");

//read a chunk
var readStream = fs.createReadStream(fsPath, {
    encoding: 'utf8',
    highWaterMark: 1024
});
//const writable = fs.createWriteStream('file.txt');
readStream.on("data", function (chunk) {
    console.log("read from chunk")
    for (var i = 10; i <= 14; ++i) {
        console.log(chunk[i])
    }

}).on("end", function () {
    console.log("finished chunk")
})