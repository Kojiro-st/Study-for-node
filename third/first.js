const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値：', (number) => {
  if (number >= 0){
    console.log(number);
    }else {
   console.log("その値は負です");
  }
  readline.close();
});