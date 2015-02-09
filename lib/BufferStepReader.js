require('./BufferExt');
var
  types = require('./types');



var littleEndianReader =
{
  'string': 'toString',
  'byte': 'readUInt8',
  'sbyte': 'readInt8',
  'ushort': 'readUInt16LE',
  'short': 'readInt16LE',
  'uint': 'readUInt32LE',
  'int': 'readInt32LE',
  'float': 'readFloatLE',
  'ulong': 'readULongLE',
  'long': 'readLongLE',
  'double':'readDoubleLE'
};

var bigEndianReader =
{
  'string': 'toString',
  'byte': 'readUInt8',
  'sbyte': 'readInt8',
  'ushort': 'readUInt16BE',
  'short': 'readInt16BE',
  'uint': 'readUInt32BE',
  'int': 'readInt32BE',
  'float': 'readFloatBE',
  'ulong': 'readULongBE',
  'long': 'readLongBE',
  'double':'readDoubleBE'
};


module.exports = function(buffer, offset)
{
  var
    buffer = buffer,
    _offset = offset || 0,
    _encoding = 'utf8',
    reader = bigEndianReader;

  this.bigEndian = function()
  {
    reader = bigEndianWriter;
    return this;
  };

  this.littleEndian = function()
  {
    reader = littleEndianWriter;
    return this;
  };

  this.encoding = function(encoding)
  {
    _encoding = encoding;
    return this;
  };

  function push(type, offset, length, encoding)
  {
    var result;

    if (typeof(offset) === 'string')
    {
      encoding = offset;
      offset = undefined;
    }
    else
      encoding = _encoding;

    if (offset >= 0)
      _offset = offset;

    if (type === 'string')
    {
      result = buffer.toString(encoding, _offset, _offset + (length || ( length = buffer.length - _offset)));
      _offset += length;
    }
    else
    {
      result = buffer[reader[type]](_offset);
      _offset += types[type];
    }
    return result;
  }

  this.Offset = function()
  {
    return _offset;
  }

  this.sbyte = this.uint8 = function(offset)
  {
    return push('sbyte', offset);
  };

  this.byte = this.int8 = function(offset)
  {
    return push('byte', offset);
  };

  this.ushort = this.uint16 =function(offset)
  {
    return push('ushort', offset);
  };

  this.short = this.int16 = function(offset)
  {
    return push('short', offset);
  };

  this.uint = this.uint32 = function(offset)
  {
    return push('uint', offset);
  };

  this.int = this.int32 = function(offset)
  {
    return push('int', offset);
  };

  this.float = function(offset)
  {
    return push('float', offset);
  };

  this.ulong = this.uint64 = function(offset)
  {
    return push('ulong', offset);
  };

  this.long = this.int64 = function(offset)
  {
    return push('long', offset);
  };

  this.double = function(offset)
  {
    return push('double', offset);
  };

  this.string = function(offset, length, encoding)
  {
    return push('string', offset, length, encoding);
  };

  this.trimstring = function(offset, length, encoding)
  {
    var result = this.string(offset, length, encoding);

    var index = result.indexOf("\u0000");
    ~index && (result = result.slice(0, index));
    return result;

  }

  this.clear = function()
  {
    _offset = 0;
  }

};