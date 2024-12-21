const { mod } = require('./index');

console.log(mod(10, 3) === 1 ? "Test passed" : "Test failed");
console.log(mod(-10, 3) === 2 ? "Test passed" : "Test failed");
console.log(mod(10, -3) === -2 ? "Test passed" : "Test failed");
console.log(mod(-10, -3) === -1 ? "Test passed" : "Test failed");

