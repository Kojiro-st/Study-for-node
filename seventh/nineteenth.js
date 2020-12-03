const rl=require("readline").createInterface(process.stdin,process.stdout);

function DeleteArray(array, startnumber, deletenumber){
  array.splice(startnumber, deletenumber);
  return array;
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var array = [];

  for(var n=0; n<number; n++){
    process.stdout.write("a["+n+"]：");
    var ArrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberArrayNumber = parseFloat(ArrayNumber);
    array[n] = NumberArrayNumber;
  }

  process.stdout.write('削除する開始インデックス：');
  var StartNumber = await new Promise(res=>rl.once("line",res));
  process.stdout.write('削除する要素の個数：');
  var DeleteNumber = await new Promise(res=>rl.once("line",res));
  DeleteArray(array, StartNumber, DeleteNumber)

  for(var n=0; n<DeleteNumber; n++){
    process.stdout.write("a["+n+"]：");
    console.log(array[n]);
  }
  for(var n=DeleteNumber; n<number-1; n++){
    process.stdout.write("a["+n+"]：");
    console.log(array[n]);
  }

  process.stdout.write("a["+(number-1)+"]：");
  console.log(array[number-2]);
  process.exit();
})();