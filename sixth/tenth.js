const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var elements = [];
  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    elements[n]=randomIntMinMax(1,10);
    console.log(elements[n]);
  }
  process.exit();
})();