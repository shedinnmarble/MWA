var fs = require("fs")
var path = require("path")
var util = require("util");
const fsPath = path.join(__dirname, "cs572.txt");
//print content length
var data = fs.readFileSync(fsPath, 'utf8')

var buffer = new Buffer(data, "utf8");
var str = util.format("buffer size is %s, content size is %s", buffer.length, data.length)
util.log(data)
util.log(str);

// var status=fs.statSync("cs572.txt");
// util.log(status.size);


//read a chunk
var readStream = fs.createReadStream(fsPath, {encoding:'utf8',highWaterMark:1});
//const writable = fs.createWriteStream('file.txt');
readStream.on("data", function (chunk) {
    console.log("read from chunk")
    for (var i = 10; i <= 14; ++i) {
        console.log(chunk[i])
    }

}).on("end", function () {
    console.log("finished chunk")
})
//readStream.pipe(writable);
//overwrite content
var overwriteContext = "ABCDEFGHIJKLMKOPQRSTUVWXYZ1234567890";
fs.writeFile(fsPath, overwriteContext, function (err) {
    //   console.log(err)
    console.log("finish writing file")
})

//append file
fs.appendFile("cs572.txt", "abc");

//change byte at 10

buffer[10] = "7";
fs.writeFile(fsPath, buffer);
