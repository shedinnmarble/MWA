const express = require('express');
const fs = require('fs')
const util = require('util');

const router = express.Router();

router.route('/')
    .get(function (req, res) {
        res.render("contactus", {
            title: 'Contact Us'
        });
    })
    .post(function (req, res) {
        const db = req.db
        const name = req.body.name
        const type = req.body.type
        const message = req.body.message;
        const collection = db.get('dewei');
        const outputMessage = util.format("name is %s, type is %s, message is %s", name, type, message)
        fs.writeFileSync("contact.txt", outputMessage);

        collection.insert({
            'name': name,
            'type': type,
            'message': message
        }, function (err, doc) {
            if (err) throw 'some thing wrong'
           return;
        })
        collection.find({
            name: 'simon'
        }, function (err, doc) {
            res.send(outputMessage+doc)
        })


    })
module.exports = router;