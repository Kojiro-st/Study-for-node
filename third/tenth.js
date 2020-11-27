const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値： ', (number) => {
  if (number%3==0){
    console.log("その値は3で割り切れます。");
  }else if((number%3==1)){
    console.log("その値を3で割った余りは1です。");
  }else if((numbera%3==2)){
    console.log("その値を3で割った余りは2です。");
  }else if(number<0){
    console.log("正でない値が入力されました。");
  }
  readline.close();
});