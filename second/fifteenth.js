const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('住所： ', (address) => {
  console.log("あなたの住所は"+address+"ですね。");
  readline.close();
});