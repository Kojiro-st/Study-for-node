const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数を加算します。');
  var sum = 0;

  for(n=1;10>=n;n++){
    console.log('■第'+n+'グループ');

    for(i=1;5>=i;i++){
      process.stdout.write('整数：')
      var number=await new Promise(res=>rl.once("line",res));
      var NumberInteger = parseFloat(number);
      if(NumberInteger==88888){
        break
      }else if(NumberInteger==99999){
        break
      }
      sum +=NumberInteger;
    }

    if(NumberInteger==99999){
      break
    }
  }

  console.log('合計は'+sum+'です。');
  process.exit();
})();