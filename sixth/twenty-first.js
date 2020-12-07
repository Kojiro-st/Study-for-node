const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  var scores = [];
  var EachScores=[];
  var TotalScore = [];
  var AverageScore = [];
  var ClassScore = 0;
  let TotalPart;

  process.stdout.write('クラス数：');
  var ClassNumber = await new Promise(res=>rl.once("line",res));
  console.log("各要素の値を入力せよ。");
  for(var n=0;n<ClassNumber;n++){
    process.stdout.write((n+1)+'組の人数：');
    var number= await new Promise(res=>rl.once("line",res));
    for(var i=0;i<number;i++){
      process.stdout.write((n+1)+'組'+(i+1)+'番の点数：');
      var score= await new Promise(res=>rl.once("line",res));
      EachScores.push(score);
      var NumberScore =parseFloat(score);
      ClassScore += NumberScore;
    }
    TotalScore.push(ClassScore);
    AverageScore.push(ClassScore/number);
    ClassScore = 0;
    scores.push(EachScores);
    EachScores=[];
  }

  console.log(' '+'組 |'+'合計 '+'平均');
  console.log('----+---------');
  for(var n=0;n<ClassNumber;n++){
    TotalPart = TotalScore[n];
    console.log(' '+(n+1)+'組 |'+TotalPart+'   '+AverageScore[n]);
  }

  process.exit();
})();