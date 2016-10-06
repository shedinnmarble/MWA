'use strict'
const EventEmitter = require("events");

class Ticker extends EventEmitter {
    constructor() {
        super();

        setInterval(() => {
            this.emit("tick");
            // console.log("emit")
            console.log(this.listenerCount("tick"));
        }, 1000);

    }
    addEvent() {
        setInterval(() => {
            this.prependOnceListener("tick", function () {
                console.log("TICK")
            })
        }, 1000)
    }
}



module.exports = Ticker
    // //instantiates
    // const ticker = new Ticker();

// ticker.on("Ticker", ticker.ticker)