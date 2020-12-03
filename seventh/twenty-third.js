const rl=require("readline").createInterface(process.stdin,process.stdout);

function arraySrchIdx(number, SearchNumber, array, NewArray){
  for(var n=0; n<number; n++){
    if(SearchNumber==array[n]){
      NewArray.push(n);
    }
  }
  return NewArray;
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var array = [];
  var NewArray = [];

  for(var n=0;n<number;n++){
    process.stdout.write("x["+n+"]：");
    var arrayNumber=await new Promise(res=>rl.once("line",res));
    array.push(arrayNumber);
  }

  process.stdout.write("探索する値：");
  var SearchNumber=await new Promise(res=>rl.once("line",res));
  
  console.log("一致する要素のインデックス");
  arraySrchIdx(number, SearchNumber, array, NewArray);
  var ArrayLength = NewArray.length;
  for(var n=0; n<ArrayLength; n++){
    console.log(NewArray[n]);
  }

  process.exit();
})();