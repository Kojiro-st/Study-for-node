const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数a：');
  var a=await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数b：');
  var b=await new Promise(res=>rl.once("line",res));
  var t;
  console.log("a>=bとなるようにソートしました。");
  if(a<b){
    t = a;
    a = b;
    b = t;
  }
  console.log("変数aは"+a+"です。");
  console.log("変数bは"+b+"です。");
  process.exit();
})();