const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('2以上の整数値：', (PrimeNumber) => {
  for(var n=2; PrimeNumber>=n; n++){
    var division = PrimeNumber%n
    if(PrimeNumber == 2){
      console.log("それは素数です。")
      break
    }else if(division == 0){
      console.log("それは素数ではありません。")
      break
    }else{
      console.log("それは素数です。")
      break
    }
  }
  readline.close();
});