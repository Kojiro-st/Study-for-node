const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('点数： ', (score) => {
  if (score>0 && score <60){
    console.log("不可");
  }else if(score<70){
    console.log("可");
  }else if (score<80){
    console.log("良");
  }else if(score>=80 && score <=100){
    console.log("優");
  }
  readline.close();
});