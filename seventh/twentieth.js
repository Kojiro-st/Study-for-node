const rl=require("readline").createInterface(process.stdin,process.stdout);

function InsertArray(array, positionnumber, insertnumber){
  array.splice(1, positionnumber, insertnumber);
  return array;
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var array = [];

  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]：");
    var ArrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberArrayNumber = parseFloat(ArrayNumber);
    array[n] = NumberArrayNumber;
  }

  process.stdout.write('挿入する開始インデックス：');
  var PositionNumber = await new Promise(res=>rl.once("line",res));
  process.stdout.write('挿入する要素の値：');
  var InsertNumber = await new Promise(res=>rl.once("line",res));
  InsertArray(array, PositionNumber, InsertNumber);

  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]：");
    console.log(array[n]);
  }
  // for(var n=DeleteNumber;n<number-1;n++){
  //   process.stdout.write("a["+n+"]：");
  //   console.log(array[n]);
  // }

  // process.stdout.write("a["+(number-1)+"]：");
  // console.log(array[number-2]);
  process.exit();
})();