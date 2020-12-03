const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数a：');
  var a=await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数b：');
  var b=await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数c：');
  var c=await new Promise(res=>rl.once("line",res));
  var min;
  var max;
  if (a>b){
    min = b;
    max = a;
    console.log("小さい値は"+min+"です");
    console.log("大きい値は"+max+"です");
  }else if(a<b){
    min = a;
    max = b;
    console.log("小さい値は"+min+"です");
    console.log("大きい値は"+max+"です");
  }else{
    console.log("二つの値は同じです。");
  }
  console.log("中央値は"+center+"です");
  process.exit();
})();