function minimum(a,b,c){
  var min = a;
  if(min>b){
    min=b;
  }else if(min>c){
    min = c;
  }
  return min;
}

// 実行例を作成する。
const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数a：');
  var a= await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数b：');
  var b= await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数c：');
  var c= await new Promise(res=>rl.once("line",res));
  console.log('最小値は'+minimum(a,b,c)+'です。')
  process.exit();
})();