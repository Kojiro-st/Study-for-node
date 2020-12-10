const rl=require("readline").createInterface(process.stdin,process.stdout);

class Decimal{
  printDouble(){
    (async function(){
      var numberElement = [];
      process.stdout.write('実数値:');
      var number = await new Promise(res=>rl.once("line",res));
      var integer = Math.floor(number);
      numberElement = number.split('');
      process.stdout.write('表示全桁数:');
      var allDigit = await new Promise(res=>rl.once("line",res));
      process.stdout.write('小数部桁数:');
      var decimalDigit = await new Promise(res=>rl.once("line",res));
      decimalDigit = parseFloat(decimalDigit);

      for(var n=0; n<decimalDigit+1+String(integer).length; n++){
        process.stdout.write(numberElement[n]); 
      }
      process.exit();
    })();
  }
}

var test = new Decimal;

test.printDouble();