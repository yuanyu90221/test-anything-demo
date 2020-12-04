const assert = require('assert');
const argv = process.argv.slice(2);
const isCoolNumber = require(argv[0]);
assert(isCoolNumber(42), true, '42 should be cool number');