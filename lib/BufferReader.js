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
  'long': 'readDoubleLE',
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
  'long': 'readDoubleBE',
  'double':'readDoubleBE'
};


module.exports = function(buffer, offset)
{
  var
    buffer = buffer,
    result = [];
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
      result.push(buffer[reader[type]](encoding, _offset, _offset + (length || ( length = buffer.length - _offset))));
      _offset += length;
    }
    else
    {
      result.push(buffer[reader[type]](_offset));
      _offset += types[type];

    }

  }

  this.sbyte = this.uint8 = function(offset)
  {
    push('sbyte', offset);
    return this;
  };

  this.byte = this.int8 = function(offset)
  {
    push('byte', offset);
    return this;
  };

  this.ushort = this.uint16 =function(offset)
  {
    push('ushort', offset);
    return this;
  };

  this.short = this.int16 = function(offset)
  {
    push('short', offset);
    return this;
  };

  this.uint = this.uint32 = function(offset)
  {
    push('uint', offset);
    return this;
  };

  this.int = this.int32 = function(offset)
  {
    push('int', offset);
    return this;
  };

  this.float = function(offset)
  {
    push('float', offset);
    return this;
  };

  this.long = this.int64 = this.double = function(offset)
  {
    push('long', offset);
    return this;
  };

  this.string = function(offset, length, encoding)
  {
    push('string', offset, length, encoding);
    return this;
  };

  this.unpack = function()
  {
    return result;
  };

  this.clear = function()
  {
    delete result;
    _offset = 0;
    result = [];
  }

};