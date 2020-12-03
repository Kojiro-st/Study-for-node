const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.prompt()
rl.on('line', input => {
  input = parseFloat(input);
  input = 10.0;
  console.log(input);
  rl.close()
})
rl.on('close', () => {
})