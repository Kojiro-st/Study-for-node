// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('球の半径を入力してください。 ', (integer) => {
//   var radius = parseFloat(integer);
//   var π = 3.14;
//   var area = 4*π*radius*radius;
//   var volume = 3*π*radius*radius*radius/4;
//   console.log("表面積は以下です。");
//   console.log(area);
//   console.log("体積は以下です。");
//   console.log(volume);
//   readline.close();
// });

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('球の表面積と体積を求めます。')
  console.log('半径：');
  var π = 3.14;
  var radius =await new Promise(res=>rl.once("line",res));
  var area = 4*π*radius*radius;
  var volume = 3*π*radius*radius*radius/4;
  console.log("表面積は"+area+"です。");
  console.log("体積は"+volume+"です。");
  process.exit();
})();