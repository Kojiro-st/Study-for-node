const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('1からnまでの和を求めます。');
  process.stdout.write('nの値：');
  var total=0;
  var number = await new Promise(res=>rl.once("line",res));
  for(var n=1; n<=number; n++){
    total += n;
  }
  console.log("1から"+number+"までの和は"+total+"です。");
  process.exit();
})();