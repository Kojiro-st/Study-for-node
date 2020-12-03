const rl=require("readline").createInterface(process.stdin,process.stdout);

function aryClone2(line, array, NewArray){
  for(var i=0; i<line; i++){
    var EachArray = array[i];
    NewArray.push(EachArray);
  }
  return NewArray;
}

(async function(){
  var AEachElement = [];
  var ATotalElement = [];
  var EachATotal = [];
  var clone = [];
  var EachClone = [];

  process.stdout.write('行列の行数：');
  var line= await new Promise(res=>rl.once("line",res));
  process.stdout.write("行列の列数：");
  var row = await new Promise(res=>rl.once("line",res));

  console.log("行列a");
  for(var i=0; i<line; i++){
    for(var m=0; m<row; m++){
      process.stdout.write('a['+i+']['+m+']:');
      var AElement= await new Promise(res=>rl.once("line",res));
      var NumberAElement = parseFloat(AElement);
      AEachElement.push(NumberAElement);
    }
    ATotalElement.push(AEachElement);
    AEachElement=[];
  }

  console.log("行列a");
  for(var i=0; i<line; i++){
    EachATotal = ATotalElement[i];
    for(var m=0; m<row; m++){
      process.stdout.write(EachATotal[m]);
    }
    console.log("");
  }

  console.log("行列aの複製");
  clone = aryClone2(line, ATotalElement, clone);
  for(var i=0; i<line; i++){
    EachClone = clone[i];
    for(var m=0; m<row; m++){
      process.stdout.write(EachClone[m]);
    }
    console.log("");
  }

  process.exit();
})();