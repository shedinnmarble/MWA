
var f=function(inp){
inp();
}

var t=function test(t="fuck you"){
    console.log(t)
}
f(t.bind(null));