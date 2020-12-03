const rl=require("readline").createInterface(process.stdin,process.stdout);

function arrayClone(number, Xarray, Yarray){
  for(var n=0 ; n<number; n++){
    Yarray[n]=Xarray[n];
  }
  return Yarray;
}

(async function(){
  process.stdout.write('要素数：');
  var number=await new Promise(res=>rl.once("line",res));
  var Xarray = [];
  var Yarray = [];

  for(var n=0;n<number;n++){
    process.stdout.write("x["+n+"]：");
    var arrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberarrayNumber = parseFloat(arrayNumber);
    Xarray[n] = NumberarrayNumber;
  }
  console.log('配列xの複製yを作りました。');
  arrayClone(number, Xarray, Yarray);

  for(var n=0; n<number; n++){
    process.stdout.write("y["+n+"]：");
    console.log(Yarray[n]);
  }

  process.exit();
})();