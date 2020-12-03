// process.stdin.resume();　
// process.stdin.setEncoding('utf8');
// var lines = []; 
// console.log("底辺、高さの順に値を入力してください。 ")
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//   var num = parseFloat(lines[0]);
//   var num2 = parseFloat(lines[1]);
//   console.log("面積は以下です。");
//   console.log((num+num2)/2);
// });

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('三角形の面積を求めます。')
  process.stdout.write('底辺：');
  var BottomLength=await new Promise(res=>rl.once("line",res));
  process.stdout.write('高さ：');
  var Hight=await new Promise(res=>rl.once("line",res));
  var sum = parseFloat(BottomLength*Hight);
  var area = parseFloat(sum/2);
  console.log("面積は"+area+"です。");
  process.exit();
})();