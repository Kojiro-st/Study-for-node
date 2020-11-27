const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('nの値：');
  var number=await new Promise(res=>rl.once("line",res));
  for(var n=0; n<=number; n++){
      console.log("nの2乗は"+n*n);
  }
  process.exit();
})();