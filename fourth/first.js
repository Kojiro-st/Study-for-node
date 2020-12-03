// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const PHASE = {
//   NORMAL: 0,
//   WILL_QUIT: 1
// }
// let phase = PHASE.NORMAL

// console.log('整数値：')
// rl.prompt()
// rl.on('line', input => {
//   switch (phase) {
//     case PHASE.NORMAL:
//       if (input>0){
//         console.log("その値は正です");
//       }else if (input<0){
//         console.log("その値は負です");
//       }else {
//         console.log("その値は0です");
//       }
//       console.log('もう一度？ 1…Yes/0…No: ');
//       rl.prompt()
//       phase = PHASE.WILL_QUIT
//       break

//     case PHASE.WILL_QUIT:
//       if (input == 0) {
//         rl.close()
//         return
//       }
//       phase = PHASE.NORMAL
//       console.log('整数値：')
//       rl.prompt()
//       break
//   }
// })
// rl.on('close', () => {
// })

// 下のやつが本解答
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

process.stdout.write('整数値：')
rl.prompt()
rl.on('line', input => {
  switch (phase) {
    case PHASE.NORMAL:
      if (input>0){
        console.log("その値は正です");
      }else if (input<0){
        console.log("その値は負です");
      }else {
        console.log("その値は0です");
      }
      process.stdout.write('もう一度？ 1…Yes/0…No: ');
      rl.prompt()
      phase = PHASE.WILL_QUIT
      break

    case PHASE.WILL_QUIT:
      if (input == 0) {
        rl.close()
        return
      }
      phase = PHASE.NORMAL
      process.stdout.write('整数値：')
      rl.prompt()
      break
  }
})
rl.on('close', () => {
})
