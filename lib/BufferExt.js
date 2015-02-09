
var
  Long = require('./Int64');

Buffer.prototype.readLongBE = Buffer.prototype.readInt64BE = function(offset, noAssert)
{
  offset = offset || 0;
  return Long.fromBits(this.readInt32BE(offset + 4), this.readInt32BE(offset)).toString();
};

Buffer.prototype.readLongLE = Buffer.prototype.readInt64LE = function(offset, noAssert)
{
  offset = offset || 0;
  return Long.fromBits(this.readInt32LE(offset), this.readInt32LE(offset + 4)).toString();
};

Buffer.prototype.readULongBE = Buffer.prototype.readUInt64BE = function(offset, noAssert)
{
  offset = offset || 0;
  return Long.fromBits(this.readUInt32BE(offset + 4), this.readUInt32BE(offset)).toString();
};

Buffer.prototype.readULongLE = Buffer.prototype.readUInt64LE = function(offset, noAssert)
{
  offset = offset || 0;
  return Long.fromBits(this.readUInt32LE(offset), this.readUInt32LE(offset + 4)).toString();
};


var parser = function(value)
{
  if (!value || (value.length && value.length === 0)) return Long.fromInt(0);

  if (typeof(value) === 'string')
    return Long.fromString(value);
  else
    return Long.fromNumber(value);
};



Buffer.prototype.writeLongBE = Buffer.prototype.writeInt64BE = function(value, offset, noAssert)
{
  offset = offset || 0;
  var result = parser(value);
  this.writeInt32BE(result.getHighBits(), offset, noAssert);
  this.writeInt32BE(result.getLowBits(), offset + 4, noAssert);
  return this;
};

Buffer.prototype.writeLongLE = Buffer.prototype.writeInt64LE = function(value, offset, noAssert)
{
  offset = offset || 0;
  var result = parser(value);
  this.writeInt32LE(result.getLowBitsUnsigned(), offset, noAssert);
  this.writeInt32LE(result.getHighBits(), offset + 4, noAssert);
  return this;
};

Buffer.prototype.writeULongBE = Buffer.prototype.writeUInt64BE = function(value, offset, noAssert)
{
  offset = offset || 0;
  var result = parser(value);
  this.writeUInt32BE(result.getHighBits(), offset, noAssert);
  this.writeUInt32BE(result.getLowBitsUnsigned(), offset + 4, noAssert);
  return this;
};

Buffer.prototype.writeULongLE = Buffer.prototype.writeUInt64LE = function(value, offset, noAssert)
{
  offset = offset || 0;
  var result = parser(value);
  this.writeUInt32LE(result.getLowBits(), offset, noAssert);
  this.writeUInt32LE(result.getHighBits(), offset + 4, noAssert);
  return this;
};

var buffer = new Buffer([ 0x82, 0x12, 0x46, 0x49, 0x15, 0x53, 0x95, 0x67 ]);


var l = Long.fromBits(buffer.readUInt32BE(4), buffer.readUInt32BE(0));

console.log(l);

console.log(l.toString());