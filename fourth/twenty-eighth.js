const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数を加算します。');
  process.stdout.write('何個加算しますか：');
  var number=await new Promise(res=>rl.once("line",res));
  var sum = 0;

  for(n=1; number>=n; n++){
    process.stdout.write('整数：');
    var integer=await new Promise(res=>rl.once("line",res));
    for(;integer < 0;){
      if(integer < 0){
        console.log('負の数は加算しません。')
        process.stdout.write('整数：');
        var integer=await new Promise(res=>rl.once("line",res));
      }
    }
    var NumberInteger = parseFloat(integer);
    sum +=NumberInteger;
  }

  console.log('合計は'+sum+'です。');
  console.log('平均は'+sum/2+'です。');
  process.exit();
})();