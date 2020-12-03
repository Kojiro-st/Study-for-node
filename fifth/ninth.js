// float型をdouble型、initを数値とする

var n = parseFloat();
for(n=parseFloat(0.0);n<=10;n++){
  console.log(n);
  // Number 
  // var SmallN = 0.001*n;
}

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.prompt()
// rl.on('line', input => {
//   var number = parseInt(input);
//   number = 10.0;
//   console.log(number);
//   rl.close()
// })
// rl.on('close', () => {
// })

var number = 0;

console.log("   x                       xの2乗   ");
console.log("------------------------------------");
for(var n=0; n<=1000; n++){
  number += 0.001;
  var Squared = number*number;
  console.log("   "+number+"                       "+Squared+"   ");
}