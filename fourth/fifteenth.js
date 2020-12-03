// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// console.log('1からnまでの和を求めます。')
// rl.prompt()
// rl.on('line', input => {
//   var n =1;
//   var times=1;
//   console.log("nの値："+input);
//   if(input == 1){
//     console.log("1 = 1");
//     rl.close()
//     return
//   }
//   while(n<=input){
//     console.log("+"+n);
//     times += n;
//     n++;
//   }
//   console.log("="+times);
//   rl.close()
// })
// rl.on('close', () => {
// })

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('1からnまでの和を求めます。');
  process.stdout.write('nの値：');
  var total=0;
  var number = await new Promise(res=>rl.once("line",res));
  var NumberNumber = parseFloat(number);
  if(number == 1){
    console.log("1 = 1");
  }else if(number>1){
    for(var n=1; n<number; n++){
      process.stdout.write(n+"+");
      total += n;
    }
    total = total + NumberNumber;
    process.stdout.write(number+"="+total);
  }
  console.log();
  process.exit();
})();

// どうやって横並びにしたらいい？javaのプログラムでは合っている気がする...一旦はこれでおいておこう