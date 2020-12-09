const rl=require("readline").createInterface(process.stdin,process.stdout);

class Search{
  static SearchEqualStrings(){
    (async function(){
      var SplitFirstString = [];
      var SplitSecondString = [];
      process.stdout.write('文字列s1:');
      var FirstString = await new Promise(res=>rl.once("line",res));
      SplitFirstString = FirstString.split('');
      process.stdout.write('文字列s2:');
      var SecondString = await new Promise(res=>rl.once("line",res));
      SplitSecondString = SecondString.split('');
      for(var n=0; n<FirstString.length; n++){
        process.stdout.write(SplitFirstString[n]);
      }
      for(var n=0; n<FirstString.length; n++){
        for(var i=0; i<=SecondString.length; i++){
          if(SplitFirstString[n]==SplitSecondString[i]){
            process.stdout.write(SplitSecondString[i]);
          }else{
            process.stdout.write(' ');
          }
        }
      }
      process.exit();
    });
  }
}

Search.SearchEqualStrings();