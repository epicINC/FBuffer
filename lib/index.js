



module.exports = function(buffer, offset)
{
  if (!!buffer)
    return offset === 'step' ? new module.exports.stepreader(buffer, offset) : new module.exports.reader(buffer, offset) 
  else
    return new module.exports.writer();
};

module.exports.types = require('./types');
module.exports.reader = require('./BufferReader');
module.exports.writer = require('./BufferWriter');
module.exports.stepreader = require('./BufferStepReader');