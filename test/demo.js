var
	fbuffer = require('../');

var pack = fbuffer().byte(4).int(8).string('demo', 'utf8').pack();

var result = fbuffer(pack).byte().int().string().unpack();

console.log(pack);
console.log(result);

console.log(fbuffer.Reader);
