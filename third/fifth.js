const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値： ', (answer) => {
  if (answer>0){
    console.log("その値は正です");
  }else if(answer<0){
    console.log("その値は負です");
  }else{
    console.log("その値は0です");
  }
  readline.close();
});