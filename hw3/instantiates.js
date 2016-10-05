'use strict'
const EventEmitter = require("events");

class Instantiates extends EventEmitter {
    constructor() {
        super();
        var self=this;
        setInterval(() => {
            self.on("dewei", function () {
                console.log("TICK")
            });
            console.log("add event")
        }, 1000)
    }
}
module.exports=Instantiates;