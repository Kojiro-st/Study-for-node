// process.stdin.resume();　
// process.stdin.setEncoding('utf8');
// var lines = []; 
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// console.log("x、yの値をそれぞれ入力してください。");
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//   var num = parseFloat(lines[0]);
//   var num2 = parseFloat(lines[1]);
//   var sum = parseFloat(num+num2);
//   var sum2 = parseFloat(sum/2);
//   console.log("合計は"+sum+"です。");
//   console.log("平均は" +sum2+"です。");
// });

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('xの値：');
  var min=await new Promise(res=>rl.once("line",res));
  process.stdout.write('yの値：');
  var max=await new Promise(res=>rl.once("line",res));
  var num = parseFloat(max);
  var num2 = parseFloat(min);
  var sum = num+num2;
  var sum2 = sum/2;
  console.log("合計は"+sum+"です。");
  console.log("平均は" +sum2+"です。");
  process.exit();
})();