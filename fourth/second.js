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

console.log('3桁の正の整数値：')
rl.prompt()
rl.on('line', input => {
  switch (phase) {
    case PHASE.NORMAL:
      if (input < 100){
        phase = PHASE.NORMAL
        console.log('3桁の正の整数値：')
        rl.prompt()
        return
      }else if (input>999){
        phase = PHASE.NORMAL
        console.log('3桁の正の整数値：')
        rl.prompt()
        return
      }
      console.log(input+'と入力しましたね。')
      rl.close()
      break
  }
})
rl.on('close', () => {
})
