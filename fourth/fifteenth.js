const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('1からnまでの和を求めます。')
rl.prompt()
rl.on('line', input => {
  var n =1;
  var times=1;
  console.log("nの値："+input);
  if(input == 1){
    console.log("1 = 1");
    rl.close()
    return
  }
  while(n<=input){
    console.log("+"+n);
    times += n;
    n++;
  }
  console.log("="+times);
  rl.close()
})
rl.on('close', () => {
})

// どうやって横並びにしたらいい？javaのプログラムでは合っている気がする...一旦はこれでおいておこう