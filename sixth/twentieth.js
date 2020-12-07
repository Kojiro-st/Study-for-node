const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  var RowArray = [];
  var EachElement = [];
  var TotalElement = [];
  console.log('凸凹な2次元配列を作ります。');
  process.stdout.write('行数：');
  var number= await new Promise(res=>rl.once("line",res));
  for(var n=0;n<number;n++){
    process.stdout.write((n+1)+"行目の列数：");
    var row = await new Promise(res=>rl.once("line",res));
    var NumberRow = parseFloat(row);
    RowArray.push(NumberRow);
  }

  console.log("各要素の値を入力せよ。");
  for(var i=0;i<number;i++){
    for(var m=0; m<RowArray[i]; m++){
      process.stdout.write('a['+i+']['+m+']:');
      var element= await new Promise(res=>rl.once("line",res));
      EachElement.push(element);
    }
    TotalElement.push(EachElement);
    EachElement=[];
  }

  console.log('配列cの各要素の値は次のようになっています。');
  for(var n=0;n<number;n++){
    for(var i=0; i<RowArray[n]; i++){
      let ElementPart = TotalElement[n];
      process.stdout.write(ElementPart[i]+" ");
    }
    console.log("");
  }
  process.exit();
})();