const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write('人数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var scores = [];
  var total = 0;
  console.log("点数を入力せよ。");
  for(var n=0; n<number; n++){
    process.stdout.write((n+1)+"番の点数： ");
    var score=await new Promise(res=>rl.once("line",res));
    var NumberScore = parseFloat(score);
    scores.push(NumberScore);
    total += NumberScore;
  }
  var average=total/number;
  var max = scores[0];
  var min = scores[0];
  for(var i=0; i<number; i++){
    if(max<scores[i]){
      max=scores[i];
    }
    if(max>scores[i]){
      min=scores[i];
    }
  }
  console.log("合計点は"+total+"です。");
  console.log("平均点は"+average+"です。");
  console.log("最高点は"+max+"です。");
  console.log("最低点は"+min+"です。");
  process.exit();
})();