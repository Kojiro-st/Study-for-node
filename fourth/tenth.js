const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('正の整数値：')
rl.prompt()
rl.on('line', input => {
  if(input==1){
    console.log("1から"+input+"までの積は"+input+"です。");
    rl.close()
  }
  var n =1;
  var times=1;
  while(input>=n){
    times*=n;
    n++;
  }
  console.log("1から"+input+"までの積は"+times+"です。");
  rl.close()
})
rl.on('close', () => {
})