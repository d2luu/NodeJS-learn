const Promise = require('promise');

module.exports = {
  buyAnIphone: (iphoneName) => {
    let isHappy = true;
    return new Promise((fullfil, reject) => {
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