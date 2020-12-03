const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('正の整数値の桁数を求めます。')
  process.stdout.write("正の整数値：");
  var digit=0;
  var number = await new Promise(res=>rl.once("line",res));
  while(number>=1){
    ++digit;
    number = number/10;
  }
  console.log("その数は"+digit+"桁です。");
  process.exit();
})();