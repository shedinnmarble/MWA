// var things=[1,2,3,4,5];

// for(var key of things.entries()){
//     console.log(key)
// }

// const alph=things.entries();
// const letter=alph.next();

// console.log(letter)

var things={"key1":1,"key2":2}
for(const key of Object.keys(things)){
    console.log(key)
    console.log(things[key])
}
