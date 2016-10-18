// var open=false
// setTimeout(function(){
//     open=true;
// },1000)

// while(!open){}

// console.log('opened')

// function foo(){
//     console.error('foo');
// }
// process.nextTick(foo);
// console.error('bar');

// function compute() {
//     console.log("compute")
//     process.nextTick(compute)
// }
// require("http").createServer(function (req, res) {
//     console.log("income")
//     res.send("done")
// }).listen(8088);
// compute();

function asyncReal(data,callback){
    process.nextTick(function(){
        var err="err"
        var data="this is data"
        callback(data==='foo',data)
    })
}
asyncReal('foo',function(err,data){
    if(data) console.log("true")
    else console.log("false")
    console.log(data)
})
console.log("done")
