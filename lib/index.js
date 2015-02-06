



module.exports = function(buffer, offset)
{
  return !!buffer ? new module.exports.Reader(buffer, offset) : new module.exports.Writer();
};

module.exports.types = require('./types');
module.exports.reader = require('./BufferReader');
module.exports.writer = require('./BufferWriter');