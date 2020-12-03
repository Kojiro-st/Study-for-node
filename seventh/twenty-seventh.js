const rl=require("readline").createInterface(process.stdin,process.stdout);

function addMatrix(AArray, BArray, CArray, Alength, Blength, Clength){
  if(Alength == Blength && Blength == Clength){
    return false;
  }else{
    for(var n=0; n<Alength; n++){
      CArray[n] = AArray[n] + BArray[n];
    }
    return CArray, true;
  }
}

// 実行結果例を参考に出力する
(async function(){
  var AArray = [[1, 2, 3], [4, 5, 6]];
  var BArray = [[6, 3, 4], [5, 1, 2]];
  var CArray = [];
  var Alength = AArray.length;
  var Blength = BArray.length;
  var Clength = CArray.length;

  process.stdout.write('行列a');
  for(var n=0; n<=1; n++){
    for(var i=0; i<=2; i++){
      process.stdout.write(AArray[n][i]);
    }
  }

  process.stdout.write('行列b');
  for(var n=0; n<=1; n++){
    for(var i=0; i<=2; i++){
      process.stdout.write(BArray[n][i]);
    }
  }

  addMatrix(AArray, BArray, CArray, Alength, Blength, Clength)

  process.stdout.write('行列c');
  for(var n=0; n<=1; n++){
    for(var i=0; i<=2; i++){
      process.stdout.write(CArray[n][i]);
    }
  }

  process.exit();
})();