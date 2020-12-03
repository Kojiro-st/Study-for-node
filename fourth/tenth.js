const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write("正の整数値：");
  var number = await new Promise(res=>rl.once("line",res));
  if(number==1){
    console.log("1から"+number+"までの積は"+number+"です。");
    rl.close()
  }
  var n =1;
  var times=1;
  while(number>=n){
    times*=n;
    n++;
  }
  console.log("1から"+number+"までの積は"+times+"です。");
  process.exit();
})();