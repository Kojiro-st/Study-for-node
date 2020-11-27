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

console.log('何個を表示しますか：')
rl.prompt()
rl.on('line', input => {
  switch (phase) {
    case PHASE.NORMAL:
      if (input % 2== 0){
        var theone = input/2;
        while(theone>0){
          console.log("*+");
          --theone;
        }
        rl.close()
        return
      }
      var thetwo = (input - 1)/2;
      while(thetwo>0){
        console.log("*+");
        --thetwo;
      }
      console.log("*");
      rl.close()
      break
  }
})
rl.on('close', () => {
})