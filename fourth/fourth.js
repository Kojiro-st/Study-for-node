const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数A：');
  var a=await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数B：');
  var b=await new Promise(res=>rl.once("line",res));
  var t;
  if (a>b){
    t=a;
    a=b;
    b=t;
  }
  while(a<=b){
    process.stdout.write(a+' ');
    a++;
  }
  // console.log();
  process.exit();
})();