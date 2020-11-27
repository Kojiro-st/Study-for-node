const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数a：');
  var a=await new Promise(res=>rl.once("line",res));
  console.log('整数b：');
  var b=await new Promise(res=>rl.once("line",res));
  let dif = Math.abs(a-b);
  console.log("それらの差は"+dif+"です。");
  process.exit();
})();