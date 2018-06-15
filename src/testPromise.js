const TestPromise = require('promise');

module.exports = {
  buyAnIphone: (iphoneName) => {
    return new TestPromise((fullfil, reject) => {
      let isHappy = false;
      if (isHappy) {
        const phone = {name: iphoneName, color: "black"};
        fullfil(phone);
      } else {
        const reason = new Error('I am not happy!');
        reject(reason);
      }
    })
  }
};