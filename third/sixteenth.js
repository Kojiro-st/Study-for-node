const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('整数a：');
  var a=await new Promise(res=>rl.once("line",res));
  console.log('整数b：');
  var b=await new Promise(res=>rl.once("line",res));
  console.log('整数c：');
  var c=await new Promise(res=>rl.once("line",res));
  var center;
  if (a>=b)
    if (b >=c){
      center = b;
    }else if (a <= c){
      center = a;
    }else{
      center=c;
    }
  else if (a>c){
    center = a;
  }else if (b>c){
    center = c;
  }else{
    center = b;
  }
  console.log("中央値は"+center+"です");
  process.exit();
})();