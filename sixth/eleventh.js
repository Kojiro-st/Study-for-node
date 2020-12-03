const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var elements = [];
  for(var n=1;n<=number;n++){
    elements[n-1]=randomIntMinMax(1,10);
    while(elements[n-1]==elements[n-2]){
      elements[n-1]=randomIntMinMax(1,10);
    }
    elements.push(elements[n-1]);
    process.stdout.write("a["+(n-1)+"]=");
    console.log(elements[n-1]);
  }
  process.exit();
})();