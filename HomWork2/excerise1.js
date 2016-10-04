var shape = {
    type: "Trangle",
    getType: function () {
        return this.type;
    }
}
var Trangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Trangle.prototype = shape;
Trangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}
var t = new Trangle(1, 2, 3);

console.log(t.constructor.toString())
console.log(t instanceof Trangle)
console.log(t.__proto__)
console.log(t.__proto__.__proto__)
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());