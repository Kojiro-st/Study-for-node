const rl=require("readline").createInterface(process.stdin,process.stdout);

function linearSearch(number, found,array){
  for(var n = 0;n < number;n++){
    if(array[n]==number){
      found=array[n];
      break
    }
    return n+1;
  }
}

function linearSearchR(number, found, array){
  for(var n = number-1 ;n >= 0; n--){
    if(array[n]==number){
      found=array[n];
      break
    }
    return n-1;
  }
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var array = [];

  for(var n=0;n<number;n++){
    process.stdout.write("x["+n+"]：");
    var ArrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberArrayNumber = parseFloat(ArrayNumber);
    array[n] = NumberArrayNumber;
  }

  process.stdout.write('探す値：');
  var FoundNumber = await new Promise(res=>rl.once("line",res));
  console.log("最も先頭のものはx["+linearSearch(number, FoundNumber, array)+"]にあります。");
  console.log("最も末尾のものはx["+linearSearchR(number, FoundNumber, array)+"]にあります。");
  process.exit();
})();