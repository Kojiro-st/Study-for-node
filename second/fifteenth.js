const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('住所： ', (integer) => {
  console.log("あなたの住所は"+integer+"ですね。");
  readline.close();
});