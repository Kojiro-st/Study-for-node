function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

// 実行例を作成する。
const rl=require("readline").createInterface(process.stdin,process.stdout);

console.log("乱数を生成します。");
(async function(){
  process.stdout.write('下限値：');
  var min= await new Promise(res=>rl.once("line",res));
  var NumberMin = parseFloat(min);
  process.stdout.write('上限値：');
  var max= await new Promise(res=>rl.once("line",res));
  var NumberMax = parseFloat(max);
  if (min>max){
    console.log(NumberMin);
  }else{
    console.log("生成した乱数は"+randomIntMinMax(NumberMin,NumberMax)+"です。");
  }
  process.exit();
})();