const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値：', (number) => {
  // var number = -5;
  // var ShowTheNumber = Math.abs(number);
  // console.log(ShowTheNumber);
  // 別の解
  if (number >= 0){
    console.log("その絶対値は"+number+"です。");
  }else{
    console.log("その絶対値は"+-(number)+"です。");
  }
  readline.close();
});