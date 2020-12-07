const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  var AEach=[];
  var ATotal=[];
  var BEach=[];
  var BTotal=[];
  var add=0;

  console.log('行列aの要素の値を入力せよ。');
  for(var n=0;n<4;n++){
    for(var i=0;i<3;i++){
      process.stdout.write('a['+n+']['+i+']:');
      var ANumber= await new Promise(res=>rl.once("line",res));
      var NumberANumber = parseFloat(ANumber);
      AEach.push(NumberANumber);
    }
    ATotal.push(AEach);
    AEach=[];
  }
  // 配列は取ることができている

  console.log('行列bの要素の値を入力せよ。');
  for(var n=0; n<3; n++){
    for(var i=0; i<4; i++){
      process.stdout.write('b['+n+']['+i+']:');
      var BNumber= await new Promise(res=>rl.once("line",res));
      var NumberBNumber = parseFloat(BNumber);
      BEach.push(NumberBNumber);
    }
    BTotal.push(BEach);
    BEach=[];
  }
  // 配列は取ることができている

  console.log('行列aとbの積');
  for(var n=0; n<4; n++){
    var EachATotal = ATotal[n];
    var EachBTotal = BTotal[n];
    for(var i=0; i<4; i++){
      var EachEachATotal = EachATotal[i];
      var EachEachBTotal = EachBTotal[i];
      // console.log(EachATotal[i]);
      // process.stdout.write(EachATotal[i]);
      // ここまでは値が取れているし、配列も取れている。ここからなんだよな...
      if(n=3){
        // console.log(EachEachATotal);
        process.stdout.write(EachEachATotal);
      }else if(i=3){
        // console.log(EachEachBTotal);
        process.stdout.write(EachEachBTotal);
      }
      // console.log(EachEachATotal*EachEachBTotal);
      process.stdout.write(EachEachATotal*EachEachBTotal);
    }
    // EachATotal=[];
    // EachBTotal=[];
    // console.log("");
  }
  // console.log(EachATotal);
  process.exit();
})();