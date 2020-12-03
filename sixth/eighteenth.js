const rl=require("readline").createInterface(process.stdin,process.stdout);

(async function(){
  var AEach=[];
  var ATotal=[];
  var BEach=[];
  var BTotal=[];
  var addEach=[];
  var addTotal=[];
  var add=0;
  console.log('行列aの要素の値を入力せよ。');
  for(var n=0;n<4;n++){
    for(var i=0;i<3;i++){
      process.stdout.write('a['+n+']['+i+']:');
      var ANumber= await new Promise(res=>rl.once("line",res));
      AEach.push(ANumber);
    }
    ATotal.push(AEach);
    AEach=[];
  }
  console.log(ATotal);
  console.log('行列bの要素の値を入力せよ。');
  for(var n=0;n<3;n++){
    for(var i=0;i<4;i++){
      process.stdout.write('b['+n+']['+i+']:');
      var BNumber= await new Promise(res=>rl.once("line",res));
      BEach.push(BNumber);
    }
    BTotal.push(BEach);
    BEach=[];
  }
  console.log(BTotal);
  console.log('行列aとbの積');
  for(var n=0;n<4;n++){
    for(var i=0;i<4;i++){
      add+=ATotal[n][i]*BTotal[n][i];
      addEach.push(add);
      process.stdout.write(addEach);
      console.log(addEach[i]);
    }
    addTotal.push(addEach);
    addEach=[];
    console.log("");
  }
  process.exit();
})();


// const rl=require("readline").createInterface(process.stdin,process.stdout);

// (async function(){
//   var add;
//   var AEach=[];
//   var ATotal=[];
//   var BEach=[];
//   var BTotal=[];
//   var ABTotal=[];
//   console.log('行列aの要素の値を入力せよ。');
//   for(var n=0;n<4;n++){
//     for(var i=0;i<3;i++){
//       process.stdout.write('a['+n+']['+i+']:');
//       var ANumber= await new Promise(res=>rl.once("line",res));
//       AEach.push(ANumber);
//     }
//     ATotal.push(AEach);
//     AEach=[];
//   }
  
//   console.log(ATotal);
//   console.log('行列bの要素の値を入力せよ。');
//   for(var n=0;n<3;n++){
//     for(var i=0;i<4;i++){
//       process.stdout.write('b['+n+']['+i+']:');
//       var BNumber= await new Promise(res=>rl.once("line",res));
//       BTotal.push(BNumber);
//       BEach.push(BNumber);
//     }
//     BTotal.push(BEach);
//     BEach=[];
//   }
//   console.log('行列aとbの積');
//   for(var n=0;n<4;n++){
//     for(var i=0;i<4;i++){
//       add+=ATotal[n][i]*BTotal[n][i];
//       ABTotal.push(add);
//       process.stdout.write(ABTotal);
//     }
//     console.log('');
//   }
//   process.exit();
// })();