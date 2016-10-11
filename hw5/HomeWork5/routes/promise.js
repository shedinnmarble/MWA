var promise = function (data) {
    return new Promise(function (resolve, reject) {
        if (data > 10) {
            resolve('success');
        } else {
            reject('no')
        }
    })
};
promise(15).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err);
})

Promise.all([promise(15), promise(5)]).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err);
})