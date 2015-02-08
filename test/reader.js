var
	assert = require("assert"),
	fbuffer = require('../');


describe('Array', function()
{
	var buffer = fbuffer()
	.byte(1)
	.sbyte(-1)
	.ushort(256)
	.short(-256)
	.uint(65536)
	.int(-32769)
	.long()
	.pack();

	var reader = fbuffer(buffer)
	.byte()
	.sbyte()
	.ushort()
	.short()
	.uint()
	.int()
	.long()
	.unpack();

	var stepreader = fbuffer(buffer, 'step');


  describe('#byte', function()
  {
    it('should return 1', function()
    {
      assert.equal(1, reader[0]);
      assert.equal(1, stepreader.byte());
    });
  });

  describe('#sbyte', function()
  {
    it('should return -1', function()
    {
      assert.equal(-1, reader[1]);
      assert.equal(-1, stepreader.sbyte());
    })
  });

  describe('#ushort', function()
  {
    it('should return 256', function()
    {
      assert.equal(256, reader[2]);
      assert.equal(256, stepreader.ushort());
    })
  });

  describe('#short', function()
  {
    it('should return 256', function()
    {
      assert.equal(-256, reader[3]);
      assert.equal(-256, stepreader.short());
    })
  });


  describe('#uint', function()
  {
    it('should return 65536', function()
    {
      assert.equal(65536, reader[4]);
      assert.equal(65536, stepreader.uint());
    })
  });

  describe('#short', function()
  {
    it('should return -32769', function()
    {
      assert.equal(-32769, reader[5]);
      assert.equal(-32769, stepreader.int());
    })
  });

})