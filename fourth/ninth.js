const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var digit=0;
console.log('正の整数値の桁数を求めます。')
rl.prompt()
rl.on('line', input => {
  while(input>=1){
    ++digit;
    input = input/10;
  }
  console.log(digit);
  rl.close()
})
rl.on('close', () => {
})