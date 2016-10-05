var buffer=new Buffer(100);
for(var i=0;i<100;++i){
    buffer[i]=i;
}
console.log(buffer.toString())
console.log("=============================")
var newBuffer=buffer.slice(40,60);
console.log(newBuffer.toString())
console.log("=============================")
var copyBuffer=new Buffer(20);
buffer.copy(copyBuffer,0,40,60);
console.log(copyBuffer.toString())
console.log("=============================")
