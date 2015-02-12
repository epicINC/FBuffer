var ref = require('ref');

var buffer = new Buffer([0x82, 0x12, 0x46, 0x49, 0x15, 0x53, 0x95, 0x67]);

console.log(buffer);
ref.writeInt64LE(buffer, 0, 'AAA');

console.log(buffer);