const rl=require("readline").createInterface(process.stdin,process.stdout);

function total(number,array){
  for(var n = 0;n < number;n++){
    var Totalarray = 0;
    Totalarray = ++array[n];
  }
  return Totalarray;
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var array = [];

  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    var ArrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberArrayNumber = parseFloat(ArrayNumber);
    array[n] = NumberArrayNumber;
  }

  console.log("全要素の合計は"+total(number,array)+"です。");
  process.exit();
})();