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

console.log('カウントアップします。\n正の整数値：')
rl.prompt()
rl.on('line', input => {
  switch (phase) {
    case PHASE.NORMAL:
      // if (input <= 0){
      //   phase = PHASE.NORMAL
      //   console.log('正の整数値：')
      //   rl.prompt()
      //   return
      // }
      for(let n=0 ;n<=input ;n++){
        console.log(n);
      }
      rl.close()
      break
  }
})
rl.on('close', () => {
})