const rl=require("readline").createInterface(process.stdin,process.stdout);

function aryExchng(Anumber, Bnumber, Aarray, Barray){
  console.log(Aarray);
  console.log(Barray);
  var t;

  if(Anumber >= Bnumber){
    for(var n=0 ; n<Bnumber; n++){
      t = Barray[n];
      Barray[n]=Aarray[n];
      Aarray[n]=t;
    }
  }

  if(Bnumber > Anumber){
    for(var n=0 ; n<Anumber; n++){
      t = Aarray[n];
      Aarray[n]=Barray[n];
      Barray[n]=t;
    }
  }

  return Aarray,Barray;
}

(async function(){
  process.stdout.write('配列aの要素数：');
  var Anumber=await new Promise(res=>rl.once("line",res));
  var Aarray = [];

  for(var n=0;n<Anumber;n++){
    process.stdout.write("a["+n+"]：");
    var AArrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberAArrayNumber = parseFloat(AArrayNumber);
    Aarray[n] = NumberAArrayNumber;
  }

  process.stdout.write('配列bの要素数：');
  var Bnumber=await new Promise(res=>rl.once("line",res));
  var Barray = [];

  for(var n=0;n<Bnumber;n++){
    process.stdout.write("b["+n+"]：");
    var BArrayNumber=await new Promise(res=>rl.once("line",res));
    var NumberBArrayNumber = parseFloat(BArrayNumber);
    Barray[n] = NumberBArrayNumber;
  }

  console.log('配列aとbの全要素を交換しました。');
  aryExchng(Anumber, Bnumber, Aarray, Barray);

  for(var n=0;n<Anumber;n++){
    process.stdout.write("a["+n+"]：");
    console.log(Aarray[n]);
  }

  for(var n=0;n<Bnumber;n++){
    process.stdout.write("b["+n+"]：");
    console.log(Barray[n]);
  }

  process.exit();
})();