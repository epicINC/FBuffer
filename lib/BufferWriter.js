var
  types = require('./types');


var littleEndianWriter =
{
  'string': 'write',
  'byte': 'writeUInt8',
  'sbyte': 'writeInt8',
  'ushort': 'writeUInt16LE',
  'short': 'writeInt16LE',
  'uint': 'writeUInt32LE',
  'int': 'writeInt32LE',
  'float': 'writeFloatLE',
  'long': 'writeDoubleLE',
  'double':'writeDoubleLE'
};

var bigEndianWriter =
{
  'string': 'write',
  'byte': 'writeUInt8',
  'sbyte': 'writeInt8',
  'ushort': 'writeUInt16BE',
  'short': 'writeInt16BE',
  'uint': 'writeUInt32BE',
  'int': 'writeInt32BE',
  'float': 'writeFloatBE',
  'long': 'writeDoubleBE',
  'double':'writeDoubleBE'
};


module.exports = function()
{
  var
    container = [],
    length = 0,
    _encoding = 'utf8',
    writer = bigEndianWriter;

  function push(value, index)
  {
    if (index >= 0)
      container.splice(index, 0, value);
    else
      container.push(value);

    length += value.type === 'string' ? value.length : types[value.type];
  }

  this.bigEndian = function()
  {
    writer = bigEndianWriter;
    return this;
  };

  this.littleEndian = function()
  {
    writer = littleEndianWriter;
    return this;
  };

  this.encoding = function(encoding)
  {
    _encoding = encoding;
    return this;
  };

  this.Length = function()
  {
    console.log(length);
    return this;
  }

  this.sbyte = this.uint8 = function(value, index)
  {
    push({ val: value, type: 'sbyte' }, index);
    return this;
  };

  this.byte = this.int8 = function(value, index)
  {
    push({ val: value, type: 'byte' }, index);
    return this;
  };

  this.ushort = this.uint16 =function(value, index)
  {
    push({ val: value, type: 'ushort' }, index);
    return this;
  };

  this.short = this.int16 = function(value, index)
  {
    push({ val: value, type: 'short' }, index);
    return this;
  };

  this.uint = this.uint32 = function(value, index)
  {
    push({ val: value, type: 'uint' }, index);
    return this;
  };

  this.int = this.int32 = function(value, index)
  {
    push({ val: value, type: 'int' }, index);
    return this;
  };

  this.float = function(value, index)
  {
    push({ val: value, type: 'float' }, index);
    return this;
  };

  this.long = this.int64 = this.double = function(value, index)
  {
    push({ val: value, type: 'long' }, index);
    return this;
  };

  this.string = function(value, index, length, encoding)
  {
    if (typeof(index) === 'string')
    {
      encoding = index;
      index = undefined;
    }
    else
      encoding = _encoding;


    push({ val: value, type: 'string', encoding: encoding, length: length || (length = Buffer.byteLength(value, encoding)) }, index);

    return this;
  };


  this.pack = function()
  {
    var result = new Buffer(length);

    for (var i = 0, offset = 0, item; i < container.length; i++)
    {
      item = container[i];
      if (item.type === 'string')
      {
        result.fill(0, offset, offset + item.length);
        if (!!item.val)
          result[writer[item.type]](item.val, offset, item.length, item.encoding);
        offset += item.length;
      }
      else
      {
        result[writer[item.type]](item.val, offset);
        offset += types[item.type];
      }

    };

    return result;
  };

  this.clear = function()
  {
    delete container;
    length = 0;
    container = [];
  }


};