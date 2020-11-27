function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const PHASE = {
  NORMAL: 0,
}
let phase = PHASE.NORMAL

console.log('数当てゲーム開始！！\n10〜99の数を当ててください。');
var answer = randomIntMinMax(10, 99);
rl.prompt()
rl.on('line', input => {
  switch (phase) {
    case PHASE.NORMAL:
      if (input < answer){
        phase = PHASE.NORMAL
        console.log('いくつかな：'+ input);
        console.log('もっと大きな数だよ。');
        rl.prompt()
        return
      }else if (input>answer){
        phase = PHASE.NORMAL
        console.log('いくつかな：'+ input);
        console.log('もっと小さな数だよ。');
        rl.prompt()
        return
      }
      console.log("正解です");
      rl.close()
      break
  }
})
rl.on('close', () => {
})
