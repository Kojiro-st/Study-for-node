const rl=require("readline").createInterface(process.stdin,process.stdout);

class CompareStrings{
  static Strings(){
    (async function(){
      process.stdout.write('文字列s1:');
      var FirstString = await new Promise(res=>rl.once("line",res));
      var NumberFirstString = FirstString.charCodeAt();
      console.log(FirstString.charCodeAt(2))
      // process.stdout.write('文字列s2:');
      // var SecondString = await new Promise(res=>rl.once("line",res));
      // if(FirstString == SecondString){
      //   console.log("s1とs2の中身は等しい。");
      // }else{
      //   console.log("s1とs2の中身は等しくない。");
      // }
      process.exit();
    })();
  }
}

CompareStrings.Strings();