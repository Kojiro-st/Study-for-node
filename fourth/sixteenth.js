const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('何cmから：');
  var min=await new Promise(res=>rl.once("line",res));
  console.log('何cmまで：');
  var max=await new Promise(res=>rl.once("line",res));
  console.log('何cmごと：');
  var dif=await new Promise(res=>rl.once("line",res));
  console.log("身長 標準体重");
  console.log('------------');
  var diff = parseFloat(dif);
  var NumberMin = parseFloat(min);
  for(; max>=NumberMin; NumberMin = NumberMin +diff){
    process.stdout.write(min);
    process.stdout.write("     ");
    console.log((NumberMin-100)*0.9);
  }
  process.exit();
})();