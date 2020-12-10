const rl=require("readline").createInterface(process.stdin,process.stdout);

class Strings{
  printStringArray(){
    (async function(){
      var sx = [];
      var sxSplit = [];
      var sxElement = [];
      process.stdout.write('文字の個数:');
      var number = await new Promise(res=>rl.once("line",res));
      // var numberNumber = parseFloat(number);
      for(var n=0; n<number; n++){
        process.stdout.write(`sx[${n}] = `);
        sx[n] = await new Promise(res=>rl.once("line",res));
        // sxSplit = sx[n].split('');
        sxElement.push(sx[n]);
      }

      for(var n=0; n<number; n++){
        for(var i=0; i<sxElement[n].length; i++){
          process.stdout.write(sxElement[n].charAt(i));
        }
        console.log();
      }
      process.exit();
    })();
  }
}

var elemantStrings = new Strings;

elemantStrings.printStringArray();