const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('何個*を表示しますか：');
  var number = await new Promise(res=>rl.once("line",res));
  for(var n=number; n>0; n--){
    process.stdout.write('*');
  }
  console.log();
  process.exit();
})();

// whileも使用できるが、リーダブルコードを読んでforをカリキュラムでは多用している。