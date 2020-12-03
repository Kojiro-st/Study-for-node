const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('何個*を表示しますか：');
  var number=await new Promise(res=>rl.once("line",res));
  var remainder = number%5;
  var division = number /5;
  if(remainder==0){
    for(var i=1; i<=division; i++){
      console.log('*****');
    }
  }else{
    var dif = number - remainder;
    var DifDivision = dif/5
    for(var i=1; i<=DifDivision; i++){
      console.log('*****');
    }
    for(var i=1; i<=remainder; i++){
      process.stdout.write("*");
    }
    console.log('');
  }
  process.exit();
})();