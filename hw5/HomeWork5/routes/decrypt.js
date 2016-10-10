const express = require('express');
const fs = require('fs')
const util = require('util');
//const crypto = require('crypto');
const router = express.Router();
//const mycrypt = require("./../utils/ctypt");
var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';


router.route("/").get(function (req, res) {
    const db = req.db;
    const collection = db.get("lab1");
    // collection.update({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"},function(err,doc){
    //     if(err) throw err;
    //     else collection.findOne({},function(err,doc){
    //         console.log(doc.message)
    //     })
    // })

    collection.findOne({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"}, function (err, doc) {
        const encrypted = doc.message
        console.log(encrypted)
        var decipher = crypto.createDecipher(algorithm, password)
        var dec = decipher.update(encrypted, 'hex', 'utf8');
        dec += decipher.final('utf8');


        // const enc = mycrypt.encrypt(new Buffer("Welcome to CS572 course!"))
        // const deenctrypted = mycrypt.decrypt(new Buffer(encrypted));
        // console.log(enc.toString())
        console.log(dec)
        res.send(dec)
    });

})

module.exports = router;