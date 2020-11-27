const rl=require("readline").createInterface(process.stdin,process.stdout);

console.log('整数値xとyとzの値を求めます。');
(async function(){
  process.stdout.write('xの値:');
  var x=await new Promise(res=>rl.once("line",res));
  process.stdout.write('yの値:');
  var y=await new Promise(res=>rl.once("line",res));
  process.stdout.write('zの値:');
  var z=await new Promise(res=>rl.once("line",res));
  process.stdout.write('x = ');
  var FloartX= Boolean(x);
  process.stdout.write('y = ');
  var DoubleY=parseFloat(y);
  console.log(DoubleY);
  process.exit();
})();





// javaのint型に当たるものがjavascriptにない(https://qiita.com/uhyo/items/f9abb94bcc0374d7ed23)
// これはやる必要があるの？