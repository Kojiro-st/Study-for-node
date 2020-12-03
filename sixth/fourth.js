const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

var RandmNumber = randomIntMinMax(1, 10);
console.log('要素数：');
rl.prompt()
rl.on('line', ElementNumber => {
  var elements = [];
  for(n=0;n<ElementNumber; n++){
    elements[n] = RandmNumber;
    for(i=10;i>=1; i--){
      for(p=0;p<ElementNumber; p++){
        if(elements[p]>=i){
          process.stdout.write('* ');
          // console.log('');
        }else{
          process.stdout.write('  ');
          // console.log('');
        }
      }
    }
  }
  console.log('');
  for(m = 0;m<2*ElementNumber;m++){
    process.stdout.write('-');
  }
  console.log('');
  for(l = 0;l<ElementNumber;l++){
    process.stdout.write(l%10+' ');
  }
  rl.close()
})
rl.on('close', () => {
  console.log('');
})