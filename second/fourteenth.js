// process.stdin.resume();　
// process.stdin.setEncoding('utf8');
// var lines = []; 
// var reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// console.log("姓、名を別々に入力してください");
// reader.on('line', (line) => {
//   lines.push(line);
// });
// reader.on('close', () => {
//   console.log("はろー！"+lines[0]+lines[1]+"さん");
// });

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('姓：');
  var FamilyName=await new Promise(res=>rl.once("line",res));
  console.log('名');
  var FirstName=await new Promise(res=>rl.once("line",res));
  console.log("こんにちは"+FamilyName+FirstName+"さん。");
  process.exit();
})();