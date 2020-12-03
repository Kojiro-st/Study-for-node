// Javasciriptで解いているため、string・number型でメソッドを作成する
const rl=require("readline").createInterface(process.stdin,process.stdout);

function absolute(string){
  if (string >= 0){
    return string;
  }else{
    return -(string);
  }
}

function absolute(number){
  if (number >= 0){
    return number;
  }else{
    return -number;
  }
}



(async function(){
  process.stdout.write('string型整数aの値：');
  var string= await new Promise(res=>rl.once("line",res));
  var StringString = toString(string);
  process.stdout.write('number型整数bの値：');
  var number= await new Promise(res=>rl.once("line",res));
  var NumberNumber = parseFloat(number);

  process.stdout.write("aの絶対値は"+absolute(StringString)+"です。");
  process.stdout.write("aの絶対値は"+absolute(NumberNumber)+"です。");
  console.log();

  process.exit();
})();