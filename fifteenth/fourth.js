const rl=require("readline").createInterface(process.stdin,process.stdout);

class Reverse{
  constructor(string){
    this.string = string;
  }

  static MakeReverse(){
    (async function(){
      process.stdout.write('文字列:');
      var string = await new Promise(res=>rl.once("line",res));
      var ReverseString = string.split("").reverse().join("");
      console.log(`逆から読むと${ReverseString}です。`)
      process.exit();
    })();
  }
}

Reverse.MakeReverse();
