const express = require('express');
const fs = require('fs')
const util = require('util');
const router = express.Router();

router.route('/')
    .get(function (req, res) {
        res.render("contactus", { title: 'Contact Us' });
    })
    .post(function (req, res) {
        const name = req.body.name
        const type = req.body.type
        const message = req.body.message;
        fs.writeFileSync("contact.txt", util.format("name is %s, type is %s, message is %s", name, type, message));
        res.send("thank you")

    })
module.exports = router;