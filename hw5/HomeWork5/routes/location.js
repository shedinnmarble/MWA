var express = require('express');

var router = express.Router();
var getDB = require('../connect.js');
router.route("/").get(function (req, res) {
    getDB().then(function (db) {
        var collection = db.collection("location");
        // var data = [{
        //     'name': "Maharishi Vedic City",
        //     'category': "MUM",
        //     loc: {
        //         type: "Point",
        //         coordinates: [ -92.00489013046877,41.052157927312315]
        //     }

        // }, {
        //     name: "Jefferson County Park",
        //     category: "MUM",
        //     loc: {
        //         type: "Point",
        //         coordinates: [ -92.02033965439455,40.98714097668851]
        //     }
        // }, {
        //     name: "Maharishi University of Management",
        //     category: "MUM",
        //     loc: {
        //         type: "Point",
        //         coordinates: [ -91.96781127304689,41.01564236100605]
        //     }
        // }, {
        //     name: "Water Works Lake",
        //     category: "MUM",
        //     loc: {
        //         type: "Point",
        //         coordinates: [ -91.95446460098879,41.02017553572494]
        //     }
        // }, {
        //     name: "Pleasant lake",
        //     category: "MUM",
        //     loc: {
        //         type: "Point",
        //         coordinates: [ -91.950001405188,41.028787708185085]
        //     }
        // }];
        // collection.insertMany(data).then(function (err) {
        //     if (err) throw err;
        //     console.log(r)
        // });
        collection.find({
            loc: {
                $near:
                {
                    $geometry: { type: "Point", coordinates: [-91.9671242, 41.0200456] },
                    $minDistance: 1000,
                    $maxDistance: 5000
                }
            }
        }, function (err, cur) {
            if (err) throw err;
            cur.sort({ loc: 1 }).limit(3).toArray(function (err, data) {
                if (err) throw err;
                res.render("location/index", { title: "Location List", locations: data });
            })
        })

        // res.send("done insert ");
    })
})

module.exports = router;