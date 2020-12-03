const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  var japaneses=[];
  var maths=[];
  var averages=[];
  console.log('6人の国語・数学の点数を入力せよ。');
  for(var n=0;n<6;n++){
    process.stdout.write((n+1)+'番...国語：');
    var japanese= await new Promise(res=>rl.once("line",res));
    // var NumberJapanese = parseFloat(japanese);
    process.stdout.write('      数学：');
    var math= await new Promise(res=>rl.once("line",res));
    // var NumberMath = parseFloat(math);
    japaneses.push(japanese);
    maths.push(math);
    averages.push((japanese+math)/2);
  }
  for(var i=0;i<6;i++){
    console.log("No. 国語 数学 平均");
    console.log(" "+i+"  "+japaneses[i]+"    "+maths[i]+"    "+averages[i]);
  }
  process.exit();
})();