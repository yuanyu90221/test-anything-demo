const argv = process.argv.slice(2);

const emotify = require(argv[0]);
console.log(emotify(argv[1]));