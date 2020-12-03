const rl=require("readline").createInterface(process.stdin,process.stdout);

function arrayRmvOfN(array, startnumber, deletenumber){
  array.splice(startnumber, deletenumber);
  return array;
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var array = [];

  for(var n=0;n<number;n++){
    process.stdout.write("x["+n+"]：");
    var arrayNumber=await new Promise(res=>rl.once("line",res));
    array.push(arrayNumber);
  }

  process.stdout.write('削除する開始インデックス：');
  var StartNumber = await new Promise(res=>rl.once("line",res));
  process.stdout.write('削除する要素の個数：');
  var DeleteNumber = await new Promise(res=>rl.once("line",res));
  arrayRmvOfN(array, StartNumber, DeleteNumber)

  for(var n=0; n<(number - DeleteNumber); n++){
    process.stdout.write("y["+n+"]：");
    console.log(array[n]);
  }

  process.exit();
})();