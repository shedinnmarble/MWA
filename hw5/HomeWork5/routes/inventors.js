var express = require('express');
const inventors = require('./../inventors.json')
var router = express.Router();


router.get("/", function (req, res, next) {
    res.status(200).render('inventors', {
        title: 'Inventors List',
        inventors: inventors
    })
})

router.get("/test",function(req,res,next){
    //  res.render('inventors', {
    //     title: 'Inventors List/Test',
    //     inventors: inventors
    // })
    res.send("app.js")
})

module.exports = router;