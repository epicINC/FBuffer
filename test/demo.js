var
	fbuffer = require('../');

var buffer = new Buffer([ 0x82, 0x12, 0x46, 0x49, 0x15, 0x53, 0x95, 0x67 ]);

var stepreader = fbuffer(buffer, 'step');

console.log(stepreader.ulong());
