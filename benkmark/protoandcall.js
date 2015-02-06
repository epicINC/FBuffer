function t1()
{
	var buffer = new Buffer(1024000);
	console.time('t1');
	for (var i = 0; i < buffer.length; i++)
		buffer['writeUInt8'](1, i);
	console.timeEnd('t1');
};


function t2()
{
	var writer = Buffer.prototype.writeUInt8;

	var buffer = new Buffer(1024000);
	console.time('t2');
	for (var i = 0; i < buffer.length; i++)
		writer.call(buffer, 1, i);
	console.timeEnd('t2');
};


t1();
t2();