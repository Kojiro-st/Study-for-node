const rl=require("readline").createInterface(process.stdin,process.stdout);

function printArray(array, number){
  for(var n=0; n<number; n++){
    process.stdout.write(array[n]+ ' ');
  }
}

function printArray(array, LineNumber){
  for(var i=0; i<LineNumber; i++){
    var Line = array[i];
    var row = Line.length;
    for(var m=0; m<row; m++){
      process.stdout.write(Line[m]+' ');
    }
    
    console.log();
  }
}

(async function(){
  var XArrayTotal = [];
  var YArrayLines =[];
  var YEachElement =[];
  var YTotalElement= [];

  process.stdout.write("1次元配列xの要素数：");
  var FirstNumber = await new Promise(res=>rl.once("line",res));
  for(var n=0; n<FirstNumber; n++){
    process.stdout.write('x['+n+']：');
    var XArrayElement = await new Promise(res=>rl.once("line",res));
    XArrayTotal.push(XArrayElement);
  }

  process.stdout.write('2次元配列yの行数：');
  var SecondNumber = await new Promise(res=>rl.once("line",res));
  for(var n=0; n<SecondNumber; n++){
    process.stdout.write(n+'行目の列数：');
    var YArrayLine = await new Promise(res=>rl.once("line",res));
    YArrayLines.push(YArrayLine);
  }

  console.log('各要素の値を入力せよ。');
  for(var i=0; i<YArrayLines.length; i++){
    for(var m=0; m<YArrayLines[i]; m++){
      process.stdout.write('y['+i+']['+m+']:');
      var YElement= await new Promise(res=>rl.once("line",res));
      YEachElement.push(YElement);
    }
    YTotalElement.push(YEachElement);
    YEachElement=[];
  }

  console.log("1次元配列x");
  printArray(XArrayTotal, FirstNumber);
  console.log();

  console.log("2次元配列y");
  printArray(YTotalElement, SecondNumber);
  console.log();

  process.exit();
})();