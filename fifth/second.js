const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('整数：');
rl.prompt()
rl.on('line', integer => {
  console.log("8進数では%oです。",integer);
  var NumberInteger = parseFloat(integer);
  console.log("16進数では"+NumberInteger.toString(16).toUpperCase()+"です。");
  rl.close()
})
rl.on('close', () => {
})
