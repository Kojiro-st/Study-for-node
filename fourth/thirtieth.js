function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log("数当てゲーム開始！！\n10〜99の数を当ててください。");
process.stdout.write('残り6回。いくつかな：');
var answer = randomIntMinMax(10, 99);

for(n=5;n>0;n--){
  rl.prompt()
  rl.on('line', input => {
    if (input < answer){
      console.log('残り'+n+'回。'+'いくつかな：'+ input);
      console.log('もっと大きな数だよ。');
      rl.prompt()
      return
    }else if (input>answer){
      phase = PHASE.NORMAL
      console.log('残り'+n+'回。'+'いくつかな：'+ input);
      console.log('もっと小さな数だよ。');
      rl.prompt()
      return
    }else if (input==answer){
      console.log(n+'回で当たりましたね。');
      rl.close()
    }
  })
  rl.on('close', () => {
  })
}
