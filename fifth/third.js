const rl=require("readline").createInterface(process.stdin,process.stdout);

console.log('変数xはfloat型で、変数yはdouble型です。');
(async function(){
  process.stdout.write('x:');
  var x=await new Promise(res=>rl.once("line",res));
  process.stdout.write('y:');
  var y=await new Promise(res=>rl.once("line",res));
  process.stdout.write('x = ');
  var FloartX= Boolean(x);
  console.log(FloartX);
  process.stdout.write('y = ');
  var DoubleY=parseFloat(y);
  console.log(DoubleY);
  process.exit();
})();