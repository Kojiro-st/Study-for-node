const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

console.log('数当てゲーム開始！！\n10〜99の数を当ててください。');
(async function(){
  var answer = randomIntMinMax(10, 99);
  do{
    process.stdout.write('いくつかな：');
    var number=await new Promise(res=>rl.once("line",res));
    if (number < answer){
      console.log('もっと大きな数だよ。');
    }else if (number > answer){
      console.log('もっと小さな数だよ。');
    }
  }while(number!=answer)
  console.log("正解です");
  process.exit();
})();