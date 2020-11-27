const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('整数値： ', (answer) => {
  var answernumber = parseFloat(answer);
  let plus = answernumber + 10;
  let minus = answernumber - 10;
  console.log("10を加えた値は"+plus+"です。");
  console.log("10を加えた値は"+minus+"です。");
  readline.close();
});