const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
// 上記で入出力ができるということか。それを下のコードで出力している。

readline.question('整数値： ', (answer) => {
  console.log(answer+`と入力しましたね。`);
  readline.close();
});
