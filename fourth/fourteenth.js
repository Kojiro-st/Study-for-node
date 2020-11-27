const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('正の整数値：')
rl.prompt()
rl.on('line', input => {
  var n =1;
  var times=1;
  while(n<=input){
    times += n;
    n++;
  }
  console.log("1から"+input+"までの和は"+times+"です。");
  rl.close()
})
rl.on('close', () => {
})