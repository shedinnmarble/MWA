// Make our db accessible to our router
var MongoClient = require('mongodb').MongoClient;

function getDB(){
    return new Promise(function(resolve, reject){
        MongoClient.connect("mongodb://dewei:dewei@ds021895.mlab.com:21895/lanbue", function (err, database) {
            if(err) reject(err);
            resolve(database);
        })
    })
}

module.exports = getDB;


