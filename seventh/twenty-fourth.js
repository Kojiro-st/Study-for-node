const rl=require("readline").createInterface(process.stdin,process.stdout);

function arrayRmvOf(array, TargethNumber){
  if(TargethNumber>number || TargethNumber<0){
    return array;
  }else{
    array.splice(TargethNumber, 1);
    return array;
  }
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

  process.stdout.write("削除する要素のインデックス：");
  var TargethNumber=await new Promise(res=>rl.once("line",res));

  arrayRmvOf(array, TargethNumber);
  for(var n=0; n<(number-1); n++){
    process.stdout.write("y["+n+"]：");
    console.log(array[n])
  }

  process.exit();
})();