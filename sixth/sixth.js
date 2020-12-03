const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write('要素数：');
(async function(){
  var elements=await new Promise(res=>rl.once("line",res));
  var a = [];
  for(n=0; n<elements; n++){
    process.stdout.write("a["+n+"] = ");
    var number=await new Promise(res=>rl.once("line",res));
    a.push(number);
  }

  process.stdout.write("a={");
  if(elements>=2){
    for(var i=0; i<elements; i++){
      process.stdout.write(a[i]);
      if(i == (elements-1)){
        break
      }else{
        process.stdout.write(",");
      }
    }
  }else if(elements=1){
    process.stdout.write(a[0]);
  }
  process.stdout.write("}");
  console.log("");
  process.exit();
})();