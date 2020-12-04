const test = require('tape');
const argv = process.argv.slice(2);
const feedCat = require(argv[0]);
test('feedCat', function(t) {
  t.plan(2)
  t.equal(feedCat('sausage'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
});