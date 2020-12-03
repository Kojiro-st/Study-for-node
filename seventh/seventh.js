function triangle(number){
  for(var n=1; n<=number; n++){
    for(var i=1; i<=n; i++){
      process.stdout.write('*');
    }
    console.log("");
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('左下直角の二等辺三角形を表示します。\n段数は：', (number) => {
  triangle(number);
  readline.close();
});