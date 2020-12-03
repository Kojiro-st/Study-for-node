const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数a：');
  var a=await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数b：');
  var b=await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数c：');
  var c=await new Promise(res=>rl.once("line",res));
  var min = a;
  if (b<min){
    min = b;
  }else if(c<min){
    min = c;
  }
  console.log("最小の値は"+min+"です");
  process.exit();
})();