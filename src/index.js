// const EventEmitter = require('events');
//
// class Customer extends EventEmitter {
//   constructor(name) {
//     super();
//
//     this.name = name;
//   }
// }
// const luu = new Customer("Luu");
// const hoa = new Customer("Hoa");
//
// const callBackFunc = (foods, customer, ...rest) => {
//   for (let food of foods) {
//     console.log(`${customer.name} call ${food}`);
//   }
//   console.log(rest.reduce((total, element) => total + element, 2));
// };
// const foodsList = ["Kem Chuoi", "Che Buoi"];
// luu.on('eventCallFoods', callBackFunc);
// hoa.on('eventCallFoods', callBackFunc);
// luu.emit('eventCallFoods', foodsList);
// hoa.emit('eventCallFoods', foodsList, hoa, 1, 2, 4);

const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
});
server.on('error', console.error);
server.on('socketError', console.error);

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>')
});

server.listen(8443);
