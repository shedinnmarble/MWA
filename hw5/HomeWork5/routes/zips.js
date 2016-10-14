var express = require('express');

var router = express.Router();
var getDB = require('../connect.js');

//find all zip codes in iowa state
router.route("/").get(function (req, res) {
    getDB().then(function (db) {
        var zips = db.collection("zips");
        // zips.find({}, function (err, data) {
        //     if (err) throw err;
        //     data.toArray(function (err, json) {
        //         if (err) throw err;
        //         res.send(json);
        //     })
        // })

        zips.aggregate([{
            $match: {
                state: "IA"

            }
        }, {
            $project: {
                zip_code: "$_id",
                state: 1,
                _id: 0
            }
        }], function (err, cur) {
            // console.log(cur);
            res.send(cur);
        })

    })
})

//find all zip codes with a population less than 1000
router.route("/q2").get(function (req, res) {
    getDB().then(function (db) {
        var zips = db.collection("zips");
        // zips.find({}, function (err, data) {
        //     if (err) throw err;
        //     data.toArray(function (err, json) {
        //         if (err) throw err;
        //         res.send(json);
        //     })
        // })

        zips.aggregate([{
            $match: {

                pop: { $lt: 1000 }
            }
        }, {
            $project: {
                zip_code: "$_id",
                city:1,
                state: 1,
                pop: 1,
                _id: 0
            }
        }], function (err, cur) {
            // console.log(cur);
            res.send(cur);
        })

    })
})

//find all cities that have more than one zip code, sort the results baseed by state and city name
router.route("/q3").get(function (req, res) {
    getDB().then(function (db) {
        var zips = db.collection("zips");
        // zips.find({}, function (err, data) {
        //     if (err) throw err;
        //     data.toArray(function (err, json) {
        //         if (err) throw err;
        //         res.send(json);
        //     })
        // })

        zips.aggregate([
            {
                $group: {
                    _id: { "zip_code": "$_id", 'city': "$city", 'state': "$state" },

                    count: { $sum: 2 }
                }
            }, {
                $match: {
                    count: { $gte: 2 }
                }
            }, {
                $project: {

                    "_id.zip_code": 1,
                    "_id.city": 1,
                    "_id.state": 1,
                    count: 1,
                    _id: 0
                }
            }, {
                $sort: {
                    "_id.city": 1
                }
            }], function (err, cur) {
                // console.log(cur);
                res.send(cur);
            })

    })
})
//find more than one zip code cities
router.route("/q3").get(function (req, res) {
    getDB().then(function (db) {
        var zips = db.collection("zips");

        zips.aggregate([{
            $match: {
                //  state: "IA"  ,
                pop: 1000,
                zip_code: "$_id"
            }
        }, {
            $project: {
                zip_code: 1
            }
        }


        ], function (err, cur) {
            // console.log(cur);
            res.send(cur);
        })

    })
})

//display the least population in each state
router.route("/q4").get(function (req, res) {
    getDB().then(function (db) {
        var zips = db.collection("zips");

        zips.aggregate(
            [{
                $sort:{
                  
                    state:1,
                      pop:1,
                }
            }, {
                $group: {
                    _id: { state: "$state" },
                    'pop': { "$min": "$pop" },
                    zip_code:{$first:"$_id"},
                    city:{$first:"$city"}

                }
            },{
                $sort:{
                    pop:1,
                    city:1
                }
            }
            ], function (err, cur) {
                // console.log(cur);
                res.send(cur);
            })

    })
})
module.exports = router;