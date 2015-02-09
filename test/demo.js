var
	fbuffer = require('../');

var buffer = fbuffer()
.byte(1)
.sbyte(-1)
.short(-256)
.ushort(256)
.pack();

var stepreader = fbuffer(buffer, 'step');

console.log(buffer);

console.log(stepreader.byte());
console.log(stepreader.sbyte());