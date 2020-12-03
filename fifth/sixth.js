const rl=require("readline").createInterface(process.stdin,process.stdout);

console.log('整数値xとyとzの値を求めます。');
(async function(){
  process.stdout.write('xの値:');
  var x=await new Promise(res=>rl.once("line",res));
  var DoubleX = parseFloat(x);
  process.stdout.write('yの値:');
  var y=await new Promise(res=>rl.once("line",res));
  var DoubleY = parseFloat(y);
  process.stdout.write('zの値:');
  var z=await new Promise(res=>rl.once("line",res));
  var DoubleZ = parseFloat(z);
  var average = (DoubleX+DoubleY+DoubleZ)/3;
  console.log('xとyとzの平均値は'+average+'です。');
  process.exit();
})();