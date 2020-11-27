const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('何個*を表示しますか：')
rl.prompt()
rl.on('line', input => {
  var remainder = input%5;
  var division = input /5;
  if(remainder==0){
    for(var i=1; i<=division; i++){
      console.log('*****');
    }
    rl.close()
    return
  }
  var dif = input - remainder;
  var DifDivision = dif/5
  for(var i=1; i<=DifDivision; i++){
    console.log('*****');
  }
  for(var i=1; i<=remainder; i++){
    process.stdout.write("*");
  }
  console.log('');
  rl.close()
})
rl.on('close', () => {
})