Array.prototype.odd = function () {
   return this.filter((val)=> val % 2 == 1);
}
Array.prototype.even = function () {
    return this.filter((val)=> val % 2 == 0);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const x = arr.odd()
console.log(x);