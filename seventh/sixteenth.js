const rl=require("readline").createInterface(process.stdin,process.stdout);

function minimum(number,array){
  for(var n = 1;n < number;n++){
    var min = array[0];
    if(min>array[n]){
      min=array[n];
    }
  }
  return min;
}


(async function(){
  process.stdout.write('人数は：');
  var people=await new Promise(res=>rl.once("line",res));
  console.log(people+"人の身長と体重を入力せよ。")
  var ArrayHight = [];
  var ArrayWeight = [];

  for(var n=0;n<people;n++){
    process.stdout.write(n+"番目の身長:");
    var hight=await new Promise(res=>rl.once("line",res));
    var NumberHight = parseFloat(hight);
    process.stdout.write(n+"番目の体重:");
    var weight=await new Promise(res=>rl.once("line",res));
    var NumberWeight = parseFloat(weight);
    ArrayHight[n] = NumberHight;
    ArrayWeight[n] = NumberWeight;
  }

  console.log("最も背が低い人の身長："+minimum(people,ArrayHight)+"cm");
  console.log("最も痩せている人の体重："+minimum(people,ArrayWeight)+"kg");
  process.exit();
})();