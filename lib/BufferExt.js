
var
  ref = require('ref');

Buffer.prototype.readLongBE = Buffer.prototype.readInt64BE = function(offset, noAssert)
{
  return ref.readInt64BE(this, offset || 0);
};

Buffer.prototype.readLongLE = Buffer.prototype.readInt64LE = function(offset, noAssert)
{
  return ref.readInt64LE(this, offset || 0);
};

Buffer.prototype.readULongBE = Buffer.prototype.readUInt64BE = function(offset, noAssert)
{
  return ref.readUInt64BE(this, offset || 0);
};

Buffer.prototype.readULongLE = Buffer.prototype.readUInt64LE = function(offset, noAssert)
{
  return ref.readUInt64LE(this, offset || 0);
};


var parser = function(value)
{
  
};



Buffer.prototype.writeLongBE = Buffer.prototype.writeInt64BE = function(value, offset, noAssert)
{
   ref.writeInt64BE(buffer, offset || 0, value);
  return this;
};

Buffer.prototype.writeLongLE = Buffer.prototype.writeInt64LE = function(value, offset, noAssert)
{
  ref.writeInt64LE(buffer, offset || 0, value);
  return this;
};

Buffer.prototype.writeULongBE = Buffer.prototype.writeUInt64BE = function(value, offset, noAssert)
{
  ref.writeUInt64BE(buffer, offset || 0, value);
  return this;
};

Buffer.prototype.writeULongLE = Buffer.prototype.writeUInt64LE = function(value, offset, noAssert)
{
  ref.writeUInt64LE(buffer, offset || 0, value);
  return this;
};
