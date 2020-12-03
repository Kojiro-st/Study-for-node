const rl=require("readline").createInterface(process.stdin,process.stdout);

function min(x, y){
  min = (x+y)/2;
  return min;
}

function min(x, y){
  min = (x+y+z)/2;
  return min;
}

function min(array, number){
  var min = array[0];
  for(var n=0; n<(number-1); n++){
    if(array[n]>array[n+1])
    min = array[n+1];
  }
  return min;
}

(async function(){
  var ATotalElement = [];

  process.stdout.write('xの値：');
  var x= await new Promise(res=>rl.once("line",res));
  process.stdout.write("yの値：");
  var y = await new Promise(res=>rl.once("line",res));
  process.stdout.write("zの値：");
  var z = await new Promise(res=>rl.once("line",res));

  process.stdout.write("配列aの要素数：");
  var number = await new Promise(res=>rl.once("line",res));
  for(var n=0; n<number; n++){
    process.stdout.write('a['+n+']:');
    var AElement= await new Promise(res=>rl.once("line",res));
    var NumberAElement = parseFloat(AElement);
    ATotalElement.push(NumberAElement);
  }

  console.log("x、yの最小値は"+min(x, y)+"です。");
  console.log("x、y、zの最小値は"+min(x,y,z)+"です。");
  console.log("配列aの最小値は"+min(ATotalElement,number)+"です。");

  process.exit();
})();