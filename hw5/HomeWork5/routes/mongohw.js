var express = require('express');
var getDB = require('../connect.js');

var router = express.Router();
//question 1 list all
router.route("/").get(function (req, res) {
        // const db = req.db;
        getDB().then(function (db) {
            const collection = db.collection("resturant");;
            const all = collection.find({}, function (err, cur) {
                // console.dir(doc)
                cur.toArray(function(err, docs){
                        res.render("resturant/all", {
                        title: "All resturant",
                        resturants: docs
                    })
                })
                
            })
        })


    })
    //q2 display resturant_id,name,borough and cuisine
router.route("/q2").get(function (req, res) {
    const db = req.db;
    const collection = db.collection("resturant");
    var query = {}
    var projection = {
        'resturant_id': 1,
        'name': 1,
        'borough': 1,
        'cuisine': 1,
        '_id': 0,
        'address': false,
        'grade': 0
    }
    const all = collection.find(query, ["-_id", "-grade", "-address"]);
    all.then(x => console.log(x));
    //console.log(all);
    res.send("test")
})




module.exports = router;