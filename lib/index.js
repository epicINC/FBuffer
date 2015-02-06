



module.exports = function(buffer, offset)
{
  return !!buffer ? new module.exports.Reader(buffer, offset) : new module.exports.Writer();
};

module.exports.types = require('./types');
module.exports.Reader = require('./BufferReader');
module.exports.Writer = require('./BufferWriter');