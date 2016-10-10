var express = require('express');

var router = express.Router();


/* GET home page. */

router.route('/').
  all(function (req, res, next) {
    console.log("check autoritions, you are dewei.");
    console.log(req.query)
    console.log(req.params)
     console.log(req.path)
      //console.log(req.body)
    res.dewei = "dewei";
    return next();
  }).get(function (req, res) {
    //res.status(123).send();
    res.render('index', {
      title: res.dewei
    });
   
  })



module.exports = router;