const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

var DayInJapanese= ["日" ,"月" ,"火" ,"水" ,"木" ,"金" ,"土"];
var DayInEnglish= ["sunday" ,"monday" ,"tuesday" ,"wednesday" ,"tyursday" ,"friday" ,"saturday" ];

console.log('英語の曜日名を入力してください。');
(async function(){
  var days = [];
  for(var n=1;;n++){
    days[n-1]=randomIntMinMax(1,12);
    var EngDay = DayInEnglish[days[n-1]-1];
    while(days[n-1]==days[n-2]){
      days[n-1]=randomIntMinMax(1,12);
    }
    days.push(days[n-1]);
    process.stdout.write(DayInJapanese[n-1]+'曜日：');
    var EnglishDay=await new Promise(res=>rl.once("line",res));
    if(EngDay==DayInEnglish[n-1]){
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