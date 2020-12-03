const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}



(async function(){
  console.log("数当てゲーム開始！！\n10〜99の数を当ててください。");
  process.stdout.write('残り6回。いくつかな：');
  var answer = randomIntMinMax(10, 99);

  var number=await new Promise(res=>rl.once("line",res));

  for(n=5;n>0;n--){
    if (number < answer){
      console.log('もっと大きな数だよ。');
    }else if (number>answer){
      console.log('もっと小さな数だよ。');
    }else if (number==answer){
      console.log(n+'回で当たりましたね。');
      break
    }
    process.stdout.write('残り'+n+'回。'+'いくつかな：');
    var number=await new Promise(res=>rl.once("line",res));
  }

  process.exit();
})();