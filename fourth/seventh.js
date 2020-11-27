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

console.log('何個*を表示しますか：')
rl.prompt()
rl.on('line', input => {
  switch (phase) {
    case PHASE.NORMAL:
      if (input < 1){
        phase = PHASE.NORMAL
        console.log('何個*を表示しますか：')
        rl.prompt()
        return
      }
      while(input>0){
        console.log("*");
        --input;
      }
      rl.close()
      break
  }
})
rl.on('close', () => {
})