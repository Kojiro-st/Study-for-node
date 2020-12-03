const rl=require("readline").createInterface(process.stdin,process.stdout);

function SumQueue(line, row, a, b, EachElement, TotalElement, name){
  for(var i=0; i<line; i++){
    var AEachElement = a[i];
    var BEachElement = b[i];
    for(var m=0; m<row; m++){
      var Element= AEachElement[m]+BEachElement[m];
      EachElement.push(Element);
    }
    TotalElement.push(EachElement);
    EachElement=[];
  }
  name = TotalElement;
  return name;
}

(async function(){
  var EachElement = [];
  var TotalElement = [];
  var a = [];
  var AEachElement = [];
  var ATotalElement = [];
  var b = [];
  var BEachElement = [];
  var BTotalElement = [];
  var c = [];
  var CEachElement = [];
  process.stdout.write('行数：');
  var line= await new Promise(res=>rl.once("line",res));
  process.stdout.write("列数：");
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
  a = ATotalElement;

  console.log("行列b");
  for(var i=0; i<line; i++){
    for(var m=0; m<row; m++){
      process.stdout.write('a['+i+']['+m+']:');
      var BElement= await new Promise(res=>rl.once("line",res));
      var NumberBElement = parseFloat(BElement);
      BEachElement.push(NumberBElement);
    }
    BTotalElement.push(BEachElement);
    BEachElement=[];
  }
  b = BTotalElement;

  console.log("行列c");
  c = SumQueue(line, row, a, b, EachElement, TotalElement, c);
  for(var n=0; n<line; n++){
    CEachElement = c[n];
    for(var i=0 ;i<row; i++){
      process.stdout.write(CEachElement[i]);
      // console.log(CEachElement[i]);
    }
    console.log("");
  }
  process.exit();
})();