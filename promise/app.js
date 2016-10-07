var fetch = require("fetch").fetchUrl;
const baidu=fetch("http://www.baidu.com");
const google=fetch("http://www.google.com")

Promise.all(baidu,google).then(function(){
    console.log("done")
})