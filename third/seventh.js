const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('変数A：');
  var a=await new Promise(res=>rl.once("line",res));
  process.stdout.write('変数B：');
  var b=await new Promise(res=>rl.once("line",res));
  if (a>b){
    console.log("aの方が大きい。");
  }else if(a<b){
    console.log("bの方が大きい。");
  }else{
    console.log("aとbは同じ値です。");
  }
  process.exit();
})();