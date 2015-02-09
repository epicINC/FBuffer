var
	assert = require("assert"),
	fbuffer = require('../');


describe('Buffer', function()
{
	var buffer = fbuffer()
	.byte(1)
	.sbyte(-1)
	.ushort(256)
	.short(-256)
	.uint(65536)
	.int(-32769)
  .ulong(4294967296)
	.long(-214748365)
  .double(Number.MAX_VALUE)
  .string('中华民族')
	.pack();

	var reader = fbuffer(buffer)
	.byte()
	.sbyte()
	.ushort()
	.short()
	.uint()
	.int()
  .ulong()
  .long()
  .double()
  .string()
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

  describe('#int', function()
  {
    it('should return -32769', function()
    {
      assert.equal(-32769, reader[5]);
      assert.equal(-32769, stepreader.int());
    })
  });


  describe('#ulong', function()
  {
    it('should return 4294967296', function()
    {
      assert.equal(4294967296, reader[6]);
      assert.equal(4294967296, stepreader.ulong());
    })
  });

  describe('#long', function()
  {
    it('should return -214748365', function()
    {
      assert.equal(-214748365, reader[7]);
      assert.equal(-214748365, stepreader.long());
    })
  });

  describe('#double', function()
  {
    it('should return '+ Number.MAX_VALUE, function()
    {
      assert.equal(Number.MAX_VALUE, reader[8]);
      assert.equal(Number.MAX_VALUE, stepreader.double());
    })
  });

  describe('#double', function()
  {
    it('should return 中华民族', function()
    {
      assert.equal('中华民族', reader[9]);
      assert.equal('中华民族', stepreader.string());
    })
  });



})