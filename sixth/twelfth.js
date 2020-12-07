const rl=require("readline").createInterface(process.stdin,process.stdout);

function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  while(number >10){
    process.stdout.write('要素数：');
    var number=await new Promise(res=>rl.once("line",res));
  }
  var elements = [];
  var i = 0;
  grid_loop:
  for(var n=0;n<number;n++){
    elements[n]=randomIntMinMax(1,10);
    // while(i<n){
    //   elements[n]=randomIntMinMax(1,10);
      for(;i<n;i++){
        if(elements[n] == elements[i]){
          break grid_loop;
        }
      }
    // }
    process.stdout.write("a["+(n)+"]=");
    elements.push(elements[n]);
    console.log(elements[n]);
  }
  process.exit();
})();

//  カリキュラムにおいて
// n = number
// i = n
// j = i