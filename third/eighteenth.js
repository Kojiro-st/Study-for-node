const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数a：');
  var a=await new Promise(res=>rl.once("line",res));
  console.log('整数b：');
  var b=await new Promise(res=>rl.once("line",res));
  var t;
  console.log("変数a："+a);
  console.log("変数b："+b);
  console.log("a>=bとなるようにソートしました。");
  if(a<b){
    t = a;
    a = b;
    b = t;
  }
  console.log("変数a："+a);
  console.log("変数b："+b);
  process.exit();
})();