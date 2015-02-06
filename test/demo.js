var
	BetterBuffer = require('../');

var pack = BetterBuffer().byte(4).int(8).string('demo', 'utf8').pack();

var result = BetterBuffer(pack).byte().int().string().unpack();

console.log(pack);
console.log(BetterBuffer.types);
