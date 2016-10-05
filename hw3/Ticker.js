'use strict'
const EventEmitter = require("events");

class Ticker extends EventEmitter {
    constructor() {
        super();
        var self = this;
        setInterval(() => {
            self.emit("dewei");
            console.log("emit")
        }, 1000)
    }
}

module.exports = Ticker
    // //instantiates
    // const ticker = new Ticker();

// ticker.on("Ticker", ticker.ticker)