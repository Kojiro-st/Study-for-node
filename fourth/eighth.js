const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('何個*を表示しますか：');
  var number = await new Promise(res=>rl.once("line",res));
  if (number % 2== 0){
    var theone = number/2;
    while(theone>0){
      process.stdout.write("*+");
      --theone;
    }
  }else{
    var thetwo = (number - 1)/2;
    while(thetwo>0){
      process.stdout.write("*+");
      --thetwo;
    }
    process.stdout.write("*");
  }
  console.log();
  process.exit();
})();