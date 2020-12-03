const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var elements = [];
  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    var value=await new Promise(res=>rl.once("line",res));
    var NumberValuen = parseFloat(value);
    elements.push(NumberValuen);
  }
  process.stdout.write('探す数値：');
  var WantNumber=await new Promise(res=>rl.once("line",res));

  // 先頭から探した場合
  for(var m=0; m<number; m++){
    if(elements[m]==WantNumber){
      console.log("それはa["+m+"]にあります。");
      break
    }
  }

  // 末尾から探した場合
  // for(var p=number-1;p>=0;p--){
  //   if(elements[m]==WantNumber){
  //     console.log("それはa["+p+"]にあります。");
  //     break
  //   }
  // }
  // console.log("それはありません。");

  process.exit();
})();