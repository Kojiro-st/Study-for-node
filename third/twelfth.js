const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('実数a：');
  var a=await new Promise(res=>rl.once("line",res));
  console.log('実数b：');
  var b=await new Promise(res=>rl.once("line",res));
  if (a>b){
    console.log("大きいほうの値は"+a+"です。");
  }else if(a<=b){
    console.log("大きいほうの値は"+b+"です。");
  }
  process.exit();
})();