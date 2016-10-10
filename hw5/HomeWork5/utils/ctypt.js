var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';

function encrypt(buffer) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(buffer, 'utf8', 'hex') + cipher.final('hex')
    return crypted;
}

function decrypt(buffer) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(buffer, 'hex', 'utf-8');
    dec += decipher.final('utf-8');
    //console.log(dec)
    return dec;
}

//module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;