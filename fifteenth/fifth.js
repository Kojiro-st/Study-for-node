const rl=require("readline").createInterface(process.stdin,process.stdout);

class Reverse{
  constructor(string){
    this.string = string;
  }

  static MakeReverse(){
    (async function(){
      var SplitString =[];
      process.stdout.write('文字列:');
      var string = await new Promise(res=>rl.once("line",res));
      SplitString = string.split('');
      for(var n=0; n<string.length; n++){
        var CharacterCode = "\n".charCodeAt(SplitString[n]);
        console.log(`s[${n}] = ${SplitString[n]} ${CharacterCode}`)
      }
      process.exit();
    })();
  }
}

Reverse.MakeReverse();
