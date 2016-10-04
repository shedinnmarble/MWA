var array=[];
array.push(1,2,3,4,5,6);
array.reverse();

array[100]=100;
array.splice(6,99,"dewei","xiang");
var newarr=array.slice(0,4)
console.log(newarr)
console.log(array.valueOf())