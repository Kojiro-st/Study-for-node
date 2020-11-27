const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値： ', (number) => {
  if (number%10==0){
    console.log("その値は10で割り切れます。");
  }else if(!(number%10==0)){
    console.log("その値は10で割り切れません。");
  }
  readline.close();
});
