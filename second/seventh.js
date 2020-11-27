const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値：', (integer) => {
  let ten = integer /10;
  value = Math.floor(ten);
  let max = value;
  let  min = integer % 10;
  console.log("最下位桁を除いた値は"+max+"です。");
  console.log("最下位桁は"+min+"です。");
  readline.close();
});