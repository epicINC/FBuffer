



module.exports = function(buffer, offset, type)
{


  if (!!buffer)
  {
  	if (typeof(offset) === 'string')
  	{
  		type = offset;
  		offset = null;
  		type === 'step' && (type = 'stepreader')
  	}
  }
  else
  	type = 'writer';
  
  return new module.exports[type || 'reader'](buffer, offset);
};

module.exports.types = require('./types');
module.exports.reader = require('./BufferReader');
module.exports.writer = require('./BufferWriter');
module.exports.stepreader = require('./BufferStepReader');