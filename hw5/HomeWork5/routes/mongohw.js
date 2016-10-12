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
                cur.toArray(function (err, docs) {
                    res.render("resturant/all", {
                        title: "All resturant",
                        resturants: docs
                    })
                })

            })
        })


    })
    //q2 display resturant_id,name,borough and cuisine
    //Write a MongoDB query to display the fields restaurant_id, name, district and cuisine for all the documents in the collection restaurant.
router.route("/q2").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {}
            var projection = {

                '_id': 0,
                //'address': 0,
                'grades': 0
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    // res.render("resturant/all", {
                    //     title: "All resturant",
                    //     resturants: docs
                    // })
                    res.send(docs)
                })
            });
            // all.then(x => console.log(x));
            // //console.log(all);
            // res.send("test")
        })
    })
    //Write a MongoDB query to display the fields restaurant_id, name, district and cuisine, but exclude the field _id for all the documents in the collection restaurant. 
router.route("/q3").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {}
        var projection = {

            'restaurant_id': 1,
            // 'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            _id: 0,
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                // res.render("resturant/all", {
                //     title: "All resturant",
                //     resturants: docs
                // })
                res.send(docs)
            })
        });
        // all.then(x => console.log(x));
        // //console.log(all);
        // res.send("test")
    })
})


//Write a MongoDB query to display the fields restaurant_id, name, district and zipcode, but exclude the field _id for all the documents in the collection restaurant. 

router.route("/q4").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {}
        var projection = {

            'restaurant_id': 1,
            'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            _id: 0,
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                // res.render("resturant/all", {
                //     title: "All resturant",
                //     resturants: docs
                // })
                res.send(docs)
            })
        });
        // all.then(x => console.log(x));
        // //console.log(all);
        // res.send("test")
    })
})

//q5 Write a MongoDB query to display all the restaurant which is in the district Bronx.
router.route("/q5").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                borough: 'Bronx'
            }
            var projection = {

                // 'restaurant_id': 1,
                // 'address.zipcode': 1,
                // 'name': 1,
                // "borough": 1,
                // _id: 0,
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    // res.render("resturant/all", {
                    //     title: "All resturant",
                    //     resturants: docs
                    // })
                    res.send(docs)
                })
            });
            // all.then(x => console.log(x));
            // //console.log(all);
            // res.send("test")
        })
    })
    //Q6 Write a MongoDB query to display the first 5 restaurant which is in the district Bronx. 
router.route("/q6").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                borough: 'Bronx'
            }
            var projection = {

                // 'restaurant_id': 1,
                // 'address.zipcode': 1,
                // 'name': 1,
                // "borough": 1,
                // _id: 0,
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.limit(5).toArray(function (err, docs) {
                    if (err) throw err;
                    // res.render("resturant/all", {
                    //     title: "All resturant",
                    //     resturants: docs
                    // })
                    res.send(docs)
                })
            });
            // all.then(x => console.log(x));
            // //console.log(all);
            // res.send("test")
        })
    })
    //Q7 Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the district Bronx. 
router.route("/q7").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            borough: 'Bronx'
        }
        var projection = {

            // 'restaurant_id': 1,
            // 'address.zipcode': 1,
            // 'name': 1,
            // "borough": 1,
            // _id: 0,
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.skip(5).limit(5).toArray(function (err, docs) {
                if (err) throw err;
                // res.render("resturant/all", {
                //     title: "All resturant",
                //     resturants: docs
                // })
                res.send(docs)
            })
        });
        // all.then(x => console.log(x));
        // //console.log(all);
        // res.send("test")
    })
})

//Q8 Write a MongoDB query to find the restaurants which locates in latitude value less than -95.754168.
router.route("/q8").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                "address.coord.0": {
                    $lt: -95.754168
                }
            }
            var projection = {

                // 'restaurant_id': 1,
                // 'address.zipcode': 1,
                // 'name': 1,
                // "borough": 1,
                // _id: 0
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    // res.render("resturant/all", {
                    //     title: "All resturant",
                    //     resturants: docs
                    // })
                    res.send(docs)
                })
            });
            // all.then(x => console.log(x));
            // //console.log(all);
            // res.send("test")
        })
    })
    //Q9Write a MongoDB query to find the restaurants that does not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168. 
router.route("/q9").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            cuisine: {
                $ne: 'American'
            },
            "grades.score": {
                $gt: 70
            },
            "address.coord.0": {
                $lt: -65.754168
            }
        }
        var projection = {

            // 'restaurant_id': 1,
            // 'address.zipcode': 1,
            // 'name': 1,
            // "borough": 1,
            // _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                // res.render("resturant/all", {
                //     title: "All resturant",
                //     resturants: docs
                // })
                res.send(docs)
            })
        });
        // all.then(x => console.log(x));
        // //console.log(all);
        // res.send("test")
    })
})

//Q10 Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which contains 'Wil' as first three letters for its name. 
router.route("/q10").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            name: {
                $regex: "^Wil"
            }
        }
        var projection = {

            'restaurant_id': 1,
            'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            "cuisine": 1,
            _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q11 Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which contains 'ces' as last three letters for its name.

router.route("/q11").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            name: {
                $regex: "ces$"
            }
        }
        var projection = {

            'restaurant_id': 1,
            //    'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            "cuisine": 1,
            _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q12 Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which contains 'Reg' as three letters somewhere in its name. 
router.route("/q12").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                name: {
                    $regex: "Reg",
                    $options: "i"
                }
            }
            var projection = {

                'restaurant_id': 1,
                //    'address.zipcode': 1,
                'name': 1,
                "borough": 1,
                "cuisine": 1,
                _id: 0
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    res.send(docs)
                })
            });

        })
    })
    //Q13 Write a MongoDB query to find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish.
router.route("/q13").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                cuisine: {
                    $in: ['American ', 'Chinese']
                }
            }
            var projection = {

                'restaurant_id': 1,
                //    'address.zipcode': 1,
                'name': 1,
                "borough": 1,
                "cuisine": 1,
                _id: 0
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    res.send(docs)
                })
            });

        })
    })
    //Q14 Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which belongs to the district Staten Island or Queens or Bronxor Brooklyn. 
router.route("/q14").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                borough: {
                    $in: ['Staten Island', 'Queens', 'Brooklyn']
                }
            }
            var projection = {

                'restaurant_id': 1,
                //    'address.zipcode': 1,
                'name': 1,
                "borough": 1,
                "cuisine": 1,
                _id: 0
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    res.send(docs)
                })
            });

        })
    })
    //Q15 Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which are not belonging to the district Staten Island or Queens or Bronxor Brooklyn. 

router.route("/q15").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            borough: {
                $nin: ['Staten Island', 'Queens', 'Brooklyn']
            }
        }
        var projection = {

            'restaurant_id': 1,
            //    'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            "cuisine": 1,
            _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q16 Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which achieved a score which is not more than 10.
router.route("/q16").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            "grades.score": {
                $lt: 10
            }
        }
        var projection = {

            'restaurant_id': 1,
            //    'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            "cuisine": 1,
            "grades.score": 1,
            _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q17 Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52. 

router.route("/q17").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            "address.coord.1": {
                $gt: 42,
                $lt: 52
            }
        }
        var projection = {

            'restaurant_id': 1,
            //    'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            "cuisine": 1,
            "address": 1,
            _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q18 Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns. 
router.route("/q18").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            //    "address.coord.1":{
            //        $gt:42,
            //        $lt:52
            //    }
        }
        var projection = {

            // 'restaurant_id': 1,
            // //    'address.zipcode': 1,
            // 'name': 1,
            // "borough": 1,
            // "cuisine": 1,
            // "address":1,
            // _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.sort({
                name: 1
            }).toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q19 Write a MongoDB query to arrange the name of the restaurants in descending order along with all the columns. 
router.route("/q19").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            //    "address.coord.1":{
            //        $gt:42,
            //        $lt:52
            //    }
        }
        var projection = {

            // 'restaurant_id': 1,
            // //    'address.zipcode': 1,
            // 'name': 1,
            // "borough": 1,
            // "cuisine": 1,
            // "address":1,
            // _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.sort({
                name: -1
            }).toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q20 Write a MongoDB query to arranged the name of the cuisine in ascending order and for those same cuisine district should be in descending order.
router.route("/q20").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            //    "address.coord.1":{
            //        $gt:42,
            //        $lt:52
            //    }
        }
        var projection = {

            // 'restaurant_id': 1,
            // //    'address.zipcode': 1,
            // 'name': 1,
            // "borough": 1,
            // "cuisine": 1,
            // "address":1,
            // _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.sort({
                name: 1,
                cuisine: 1,
                borough: -1
            }).toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q21 Write a MongoDB query to know whether all the addresses contains the street or not. 
router.route("/q21").get(function (req, res) {
        getDB().then(function (db) {
            const collection = db.collection("resturant");
            var query = {
                address: {
                    $exists: false
                }
            }
            var projection = {

                // 'restaurant_id': 1,
                // //    'address.zipcode': 1,
                // 'name': 1,
                // "borough": 1,
                // "cuisine": 1,
                // "address":1,
                // _id: 0
            }
            const all = collection.find(query, projection, function (err, docs) {
                docs.toArray(function (err, docs) {
                    if (err) throw err;
                    console.log(docs.length)
                    if (docs.length == 0) {
                        res.send("All the documents contains the address")
                    } else {
                        res.send("Exists documents does not contains the address")
                    }

                })
            });

        })
    })
    //Q22 Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
router.route("/q22").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            "address.coord": {
                $type: "double"
            }
        }
        var projection = {

            // 'restaurant_id': 1,
            // //    'address.zipcode': 1,
            // 'name': 1,
            // "borough": 1,
            // "cuisine": 1,
            // "address":1,
            // _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.sort({
                name: 1,
                cuisine: 1,
                borough: -1
            }).toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

//Q23 Write a MongoDB query to find the restaurant name, district, longitude and latitude and cuisine for those restaurants which contains 'Mad' as first three letters of its name. 
router.route("/q23").get(function (req, res) {
    getDB().then(function (db) {
        const collection = db.collection("resturant");
        var query = {
            name: {
                $regex: "^Mad"
            }
        }
        var projection = {
            'restaurant_id': 1,
            //    'address.zipcode': 1,
            'name': 1,
            "borough": 1,
            "cuisine": 1,
            "address.coord": 1,
            _id: 0
        }
        const all = collection.find(query, projection, function (err, docs) {
            docs.sort({
                name: 1,
                cuisine: 1,
                borough: -1
            }).toArray(function (err, docs) {
                if (err) throw err;
                res.send(docs)
            })
        });

    })
})

module.exports = router;