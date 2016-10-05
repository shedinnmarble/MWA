var http = require('http'),
    fs = require('fs');

fs.readFile('img.jpg', function (err, data) {
    if (err) throw err; // Fail if the file can't be read.
    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'image/jpeg'
        });
        res.end(data); // Send the file data to the browser.
    }).listen(1317);
    console.log('Server running at http://localhost:1317/');
});