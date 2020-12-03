const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数値：');
  var number=await new Promise(res=>rl.once("line",res));
  var count = 0;
  for(var n=0; n<=number; n++){
    if(number%n==0){
      console.log(n+"");
      count++;
    }
  }
  console.log("約数は"+count+"個です。");
  process.exit();
})();