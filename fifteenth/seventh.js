// javascriptではクラス内でインスタンスの生成はできないため、asyncで生成したものを比較する

const rl=require("readline").createInterface(process.stdin,process.stdout);

class Compare{

  static CompareStrings(){
    (async function(){
      process.stdout.write('文字列s1:');
      var FirstString = await new Promise(res=>rl.once("line",res));
      process.stdout.write('文字列s2:');
      var SecondString = await new Promise(res=>rl.once("line",res));
      if(FirstString == SecondString){
        console.log("s1とs2の中身は等しい。");
      }else{
        console.log("s1とs2の中身は等しくない。");
      }
      process.exit();
    })();
  }
}

Compare.CompareStrings();
