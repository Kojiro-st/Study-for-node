// number型で解いた。
const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var elements = [];
  var total =0;
  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    var value=await new Promise(res=>rl.once("line",res));
    var NumberValue = parseFloat(value);
    elements.push(NumberValue);
    total += NumberValue;
  }
  var average=total/number;
  console.log("全要素の合計は"+total+"です。");
  console.log("全要素の平均は"+average+"です。");

  process.exit();
})();