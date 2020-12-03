function sum(number){
  var SumX=0;
  for(var n=1; n<=number; n++){
    SumX +=n;
  }
  return SumX;
}

// 実行例を作成する。
const rl=require("readline").createInterface(process.stdin,process.stdout);

console.log("1からxまでの和を求めます。");
(async function(){
  process.stdout.write('xの値：');
  var x= await new Promise(res=>rl.once("line",res));
  console.log("1から"+x+"までの和は"+sum(x)+"です。");
  process.exit();
})();