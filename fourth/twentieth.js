const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const PHASE = {
  NORMAL: 0,
  WILL_QUIT: 1
}
let phase = PHASE.NORMAL

console.log('季節を求めてます。\n何月ですか？：');
rl.prompt()
rl.on('line', month => {
  switch (phase) {
    case PHASE.NORMAL:
      if (month>=3 && month<=5){
        console.log("それは春です");
      }else if (month>=6 && month<=8){
        console.log("それは夏です");
      }else if (month>=9 && month<=11){
        console.log("それは秋です");
      }else if (month==12 || month==1 || month ==2){
        console.log("それは冬です");
      }else {
        console.log('何月ですか：');
        phase = PHASE.NORMAL
        break
      }
      console.log('もう一度？ 1…Yes/0…No: ');
      rl.prompt()
      phase = PHASE.WILL_QUIT
      break

    case PHASE.WILL_QUIT:
      if (month == 0) {
        rl.close()
        return
      }
      phase = PHASE.NORMAL
      console.log('何月ですか：');
      rl.prompt()
      break
  }
})
rl.on('close', () => {
})
