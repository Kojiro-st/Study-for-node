const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数を加算します。');
  process.stdout.write('何個加算しますか：');
  var number=await new Promise(res=>rl.once("line",res));
  var FakeSum = 0;
  var TrueSum = 0;
  for(n=1;number>=n;n++){
    process.stdout.write('整数：');
    var integer=await new Promise(res=>rl.once("line",res));
    var NumberInteger = parseFloat(integer);
    FakeSum +=NumberInteger;
    if(FakeSum >= 1000){
      console.log("合計が1,000を超えました。最後の数値は無視します。");
      break;
    }
    TrueSum +=NumberInteger;
  }
  console.log('合計は'+TrueSum+'です。');
  console.log('平均は'+TrueSum/2+'です。');
  process.exit();
})();