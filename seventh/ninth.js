function reverse(number){
  // var NumberString = parseFloat(string);
  for(;number>0;){
    process.stdout.write(number%10);
    number/=10;
  }
}

function randomIntMinMax(number){
  console.log(number);
  for(var n = number;n>0;){
    process.stdout.write(n%10);
    n/=10;
  }
  return
  // var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  // return rand
}

// 実行例を作成する。
const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  do{
    process.stdout.write('正の整数値：');
    var number= await new Promise(res=>rl.once("line",res));
    while(number<=0){
      process.stdout.write('正の整数値：');
      var number= await new Promise(res=>rl.once("line",res));
    }
    var StringNumber = toString(number);

    console.log("逆から読むと"+randomIntMinMax(StringNumber)+"です。")
    process.stdout.write('もう一度？ 1...Yes/0...No：');
    var OneOrZero =await new Promise(res=>rl.once("line",res));
    if(OneOrZero == 0){
      process.exit();
    }
  }while(OneOrZero==1)
})();