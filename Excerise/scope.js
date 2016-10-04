var x = 10;
function main() {
    console.log("x1 is " + x);
    x = 20;
    console.log("x2 is " + x);
    if (x > 0) {
        var x = 30;
        console.log("x3 is " + x);
    }
    console.log("x4 is " + x);
    var x=40;
    var f = function (x) {
        console.log("x5 is " + x);
    }
    f(100);
}
main();