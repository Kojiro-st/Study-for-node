function season(month){
  switch (month){
    case 3:
    case 4:
    case 5:
      return "春";
    case 6:
    case 7:
    case 8:
      return "夏";
    case 9:
    case 10:
    case 11:
      return "秋";
    case 12:
    case 1:
    case 2:
      return "冬";
  }
}

// 実行例を作成する。
const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write("何月ですか？(1〜12)：");
(async function(){
  var number= await new Promise(res=>rl.once("line",res));
  var NumberNumber = parseFloat(number);
  console.log("その月の季節は"+season(NumberNumber)+"です。");
  process.exit();
})();