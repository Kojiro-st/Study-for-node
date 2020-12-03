const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

var month= ["January" ,"Feburuary" ,"March" ,"April" ,"May" ,"June" ,"July" ,"August" ,"September" ,"October" ,"November" ,"December"];

console.log('英語の月名を入力してください。\nなお、先頭は大文字で、2文字目以降は小文字とします。');
(async function(){
  var numbers = [];
  for(var n=1;;n++){
    numbers[n-1]=randomIntMinMax(1,12);
    var WriteMonth = month[numbers[n-1]-1];
    while(numbers[n-1]==numbers[n-2]){
      numbers[n-1]=randomIntMinMax(1,12);
    }
    numbers.push(numbers[n-1]);
    process.stdout.write(numbers[n-1]+'月：');
    var MonthInEnglish=await new Promise(res=>rl.once("line",res));
    if(WriteMonth==MonthInEnglish){
      process.stdout.write('正解です。');
      process.stdout.write('もう一度？ 1...Yes/0...No：');
      var OneOrZero =await new Promise(res=>rl.once("line",res));
      if(OneOrZero == 0){
        process.exit();
      }
    }
    else{
      console.log('違います。');
    }
  }
})();