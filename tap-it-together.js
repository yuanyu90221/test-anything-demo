const test = require('tape');
const argv = process.argv.slice(2);
const fancify = require(argv[0]);
test('fancify', function(t) {
  t.equal(fancify('Hello'),'~*~Hello~*~', 'Wraps a string in ~*~')
  t.equal(fancify('Hello', true),'~*~HELLO~*~', 'Optionally makes it allcapital')
  t.equal(fancify('Hello', false, '!'),'~!~Hello~!~', 'Optionally allow to set the character')
  t.end()
});