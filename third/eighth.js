const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値： ', (number) => {
  if (number%5==0){
    console.log("その値は5で割り切れます。");
  }else if(!(number%5==0)){
    console.log("その値は5で割り切れません。");
  }else if(number<0){
    console.log("正でない値が入力されました。");
  }
  readline.close();
});