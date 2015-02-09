# FBuffer
fluent buffer

## Update

*  add trimstring
*  fix some bug
*  add long type 

## Install

```js
npm i fubffer
```

## How to use

```js
var fbuffer = require('fbuffer');
```
buffer writer:
```js
var pack = fbuffer().byte(4).int(8).string('demo', 'utf8').pack();
console.log(pack);
```

buffer reader:
```js
var result = fbuffer(pack).byte().int().string().unpack();
console.log(result);
```

## License

MIT
