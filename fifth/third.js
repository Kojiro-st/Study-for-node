const rl=require("readline").createInterface(process.stdin,process.stdout);

console.log('変数xをdouble型で、変数yをdouble型です。');
(async function(){
  process.stdout.write('x:');
  var x=await new Promise(res=>rl.once("line",res));
  process.stdout.write('y:');
  var y=await new Promise(res=>rl.once("line",res));
  process.stdout.write('x = ');
  var FloartX= parseFloat(x);
  console.log(FloartX);
  process.stdout.write('y = ');
  var DoubleY=parseInt(y);
  console.log(DoubleY);
  process.exit();
})();