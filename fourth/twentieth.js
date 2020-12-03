const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  console.log('季節を求めてます。');
  process.stdout.write('何月ですか？：');
  var month = await new Promise(res=>rl.once("line",res));

  do{
    if (month>=3 && month<=5){
      console.log("それは春です");
    }else if (month>=6 && month<=8){
      console.log("それは夏です");
    }else if (month>=9 && month<=11){
      console.log("それは秋です");
    }else if (month==12 || month==1 || month ==2){
      console.log("それは冬です");
    }

    process.stdout.write('もう一度？ 1…Yes/0…No: ');
    var m = await new Promise(res=>rl.once("line",res));
  }while(m==1)

  process.exit();
})();