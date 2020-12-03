const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('カウントダウンします。');
  process.stdout.write('正の整数値：');
  var number = await new Promise(res=>rl.once("line",res));
  while(number<=0){
    process.stdout.write('正の整数値：');
    var number = await new Promise(res=>rl.once("line",res));
  }
  for(var n=number; n>=0; --n){
    console.log(n);
  }
  console.log("xの値は"+n+"になりました。");
  process.exit();
})();

// ↑教科書的には、--がinputの後につくことでデクリメント前の値を算出するらしい。
