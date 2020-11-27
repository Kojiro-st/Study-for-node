const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('ピラミッドを表示します。\n段数は：', (number) => {
  
  for(var n=1; number>=n; n++){
    for(var i=1; number-n>=i; i++){
      process.stdout.write(' ');
    }
    for(var i=1; (2*n-1)>=i; i++){
      var remainder = i%10;
      var string = String(remainder);
      process.stdout.write(string);
    }
    console.log("");
  }
  readline.close();
});