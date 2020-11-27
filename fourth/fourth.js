const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数A：');
  var a=await new Promise(res=>rl.once("line",res));
  console.log('整数B：');
  var b=await new Promise(res=>rl.once("line",res));
  var t;
  if (a>b){
    t=a;
    a=b;
    b=t;
  }
  while(a<=b){
    console.log(a);
    a++;
  }
  process.exit();
})();