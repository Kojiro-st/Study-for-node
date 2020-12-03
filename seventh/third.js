function center(a,b,c){
  var center = a;
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
  return center;
}

// カリキュラム通りのメソッドを作成すると...
function center(a,b,c){
  if (a>=b)
    if (b >=c){
      return b;
    }else if (a <= c){
      return a;
    }else{
      return c;
    }
  else if (a>c){
    return a;
  }else if (b>c){
    return c;
  }else{
    return b;
  }
}


// 実行例を作成する。
const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  process.stdout.write('整数a：');
  var a= await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数b：');
  var b= await new Promise(res=>rl.once("line",res));
  process.stdout.write('整数c：');
  var c= await new Promise(res=>rl.once("line",res));
  console.log('中央値は'+center(a,b,c)+'です。')
  process.exit();
})();