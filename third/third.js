const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('変数A：');
  var a=await new Promise(res=>rl.once("line",res));
  console.log('変数B：');
  var b=await new Promise(res=>rl.once("line",res));
  if (a%b == 0){
    console.log("BはAの約数です。");
  }else{
    console.log("BはAの約数ではありません。");
  }
  process.exit();
})();