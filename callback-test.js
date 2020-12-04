const test = require('tape');
const argv = process.argv.slice(2);
const repeatCallBack = require(argv[0]);
test('callback', function(t){
  t.plan(5)
  repeatCallBack(5, function(){
    t.pass('callback called');
  });
  t.end();
});