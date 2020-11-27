const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('正方形を表示します。\n段数は', (number) => {
  for(var n=1; n<=number; n++){
    for(var i=1; i<=number; i++){
      process.stdout.write('*');
    }
    console.log("");
  }
  readline.close();
});