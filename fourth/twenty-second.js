const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline.question('左下直角の二等辺三角形を表示します。\n段数は：', (number) => {
//   for(var n=1; n<=number; n++){
//     for(var i=1; i<=n; i++){
//       process.stdout.write('*');
//     }
//     console.log("");
//   }
//   readline.close();
// });

// readline.question('左上直角の二等辺三角形を表示します。\n段数は：', (number) => {
//   for(var n=number; n>=1; n--){
//     for(var i=n; i>=1; i--){
//       process.stdout.write('*');
//     }
//     console.log("");
//   }
//   readline.close();
// });

// readline.question('右下直角の二等辺三角形を表示します。\n段数は：', (number) => {
//   for(var n=1; number>=n; n++){
//     for(var i=1; number-n>=i; i++){
//       process.stdout.write(' ');
//     }
//     for(var i=1; n>=i; i++){
//       process.stdout.write('*');
//     }
//     console.log("");
//   }
//   readline.close();
// });

// readline.question('右上直角の二等辺三角形を表示します。\n段数は：', (number) => {
//   for(var n=1; number>=n; n++){
//     for(var i=1; n-1>=i; i++){
//       process.stdout.write(' ');
//     }
//     for(var i=1; number-n+1>=i; i++){
//       process.stdout.write('*');
//     }
//     console.log("");
//   }
//   readline.close();
// });