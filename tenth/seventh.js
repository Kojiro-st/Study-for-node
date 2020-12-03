class Utility{
  constructor(a,b,c,array){
    this.a = a;
    this.b = b;
    this.c = c;
    this.array = array;
  }
  static TwoMin(a, b){
    var min = a;
    if(a>b){
      min = b;
    }
    return min;
  }
  static ThreeMin(a, b, c){
    var min = a;
    if(a>b){
      min = b;
    }else if(b>c){
      min = c;
    }
    return min;
  }
  static ArrayMin(array, number){
    var min = array[0];
    var index = 0;
    for(var n=1; n<number; n++){
      if(array[n]<min){
        min = array[n];
        index = n;
      }
    }
    return min;
  }

  static ArrayMinIndex(array, number){
    var min = array[0];
    var index = 0;
    for(var n=1; n<number; n++){
      if(array[n]<min){
        min = array[n];
        index = n;
      }
    }
    return index;
  }

  static TwoMax(a, b){
    var max = a;
    if(a>b){
      max = a;
    }
    return max;
  }
  static ThreeMax(a, b, c){
    var max = a;
    if(b>a){
      max = b;
    }else if(c>b){
      max = c;
    }
    return max;
  }

  static ArrayMax(array, number){
    var max = array[0];
    var index = number;
    for(var m=0; m<number; m--){
      if(array[m]>max){
        max = array[m];
        index = m;
      }
    }
    return max;
  }

  static ArrayMaxIndex(array, number){
    var max = array[0];
    var index = number;
    for(var m=0; m<number; m--){
      if(array[m]>max){
        max = array[m];
        index = m;
      }
    }
    return index;
  }
}

const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  var ATotalElement = [];

  process.stdout.write('xの値：');
  var x= await new Promise(res=>rl.once("line",res));
  process.stdout.write("yの値：");
  var y = await new Promise(res=>rl.once("line",res));
  process.stdout.write("zの値：");
  var z = await new Promise(res=>rl.once("line",res));

  process.stdout.write("配列aの要素数：");
  var number = await new Promise(res=>rl.once("line",res));
  for(var n=0; n<number; n++){
    process.stdout.write('a['+n+']:');
    var AElement= await new Promise(res=>rl.once("line",res));
    var NumberAElement = parseFloat(AElement);
    ATotalElement.push(NumberAElement);
  }

  console.log("x、yの最小値は"+Utility.TwoMin(x, y)+"です。");
  console.log("x、yの最大値は"+Utility.TwoMax(x, y)+"です。");
  console.log("x、y、zの最小値は"+Utility.ThreeMin(x, y, z)+"です。");
  console.log("x、y、zの最大値は"+Utility.ThreeMax(x, y, z)+"です。");
  console.log("配列aの最小値は"+Utility.ArrayMin(ATotalElement, number)+"です。");
  console.log("そのインデックスは｛"+Utility.ArrayMinIndex(ATotalElement, number)+"｝です。");
  console.log("配列aの最大値は"+Utility.ArrayMax(ATotalElement, number)+"です。");
  console.log("そのインデックスは｛"+Utility.ArrayMaxIndex(ATotalElement, number)+"｝です。");

  process.exit();
})();