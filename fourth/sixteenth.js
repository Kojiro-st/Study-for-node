// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// var lines = []; 
// // var reader = require('readline').createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });
// // console.log("姓、名を別々に入力してください");
// // reader.on('line', (line) => {
// //   lines.push(line);
// // });

// // console.log('何cmから：');
// // rl.prompt()
// // console.log('何cmまで：');
// // rl.prompt()
// // console.log('何cmごと：');
// rl.prompt()
// // console.log('身長 標準体重');
// // console.log('------------');

// console.log('何cmから：');
// rl.on('line', input => {
//   lines.push(input);
//   console.log('何cmから：');
//   rl.prompt()
//   console.log('何cmまで：');
//   rl.prompt()
//   console.log('何cmごと：');
//   rl.prompt()
//   console.log('身長 標準体重');
//   console.log('------------');
//   rl.close()
// })
// rl.on('close', () => {
// })

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('何cmから：');
  var min=await new Promise(res=>rl.once("line",res));
  console.log('何cmまで：');
  var max=await new Promise(res=>rl.once("line",res));
  console.log('何cmごと：');
  var dif=await new Promise(res=>rl.once("line",res));
  console.log("身長 標準体重");
  console.log('------------');
  var diff = parseFloat(dif);
  while(max>=min){
    process.stdout.write(min);
    process.stdout.write(" ");
    console.log((min-100)*0.9);
    min += diff;
  }
  // for(let m = min; max >= m; m += diff){
  //   process.stdout.write(min);
  //   process.stdout.write(" ");
  //   console.log((min-100)*0.9);
  // }
  process.exit();
})();

// for (let i = 3; i < 10; i += 3){
//   console.log("i = " + i);
// }


// for(var n=0; n<input; n++){
//   console.log("*");
// }