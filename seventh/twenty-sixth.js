const rl=require("readline").createInterface(process.stdin,process.stdout);

function arrayInsOf(array, startnumber, InsertNumber){
  array.splice(startnumber, 0, InsertNumber);
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

  process.stdout.write('挿入するインデックス：');
  var StartNumber = await new Promise(res=>rl.once("line",res));
  process.stdout.write('挿入する値：');
  var InsertNumber = await new Promise(res=>rl.once("line",res));
  arrayInsOf(array, StartNumber, InsertNumber)

  for(var n=0; n<=number; n++){
    process.stdout.write("y["+n+"]：");
    console.log(array[n]);
  }

  process.exit();
})();