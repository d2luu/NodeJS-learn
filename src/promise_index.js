const testPromise = require('./testPromise');

console.log("Using Promise");
testPromise.buyAnIphone("Iphone X")
.then(res => console.log(res))
.catch(err => console.log(err));