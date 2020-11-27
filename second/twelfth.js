const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

readline.question('整数値： ', (answer) => {
  var answernumber = parseFloat(answer);
  let max = answernumber + 5;
  let min = answernumber - 5;
  console.log("その値+-5の乱数を生成しました。");
  console.log("値は"+randomIntMinMax(min, max)+"です。");
  readline.close();
});