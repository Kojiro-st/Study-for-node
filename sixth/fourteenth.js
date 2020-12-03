const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var elementsA = [];
  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    var value=await new Promise(res=>rl.once("line",res));
    var NumberValue = parseFloat(value);
    elementsA.push(NumberValue);
  }

  console.log("aの全要素を逆順にbにコピーしました。");
  var elementsB = [];
  for(var i = 0; number > i; i++) {
    elementsB[i] = elementsA[number-i-1];
  }
  for(var n=0;n<number;n++){
    process.stdout.write("b["+n+"]=");
    console.log(elementsB[n]);
  }
  process.exit();
})();