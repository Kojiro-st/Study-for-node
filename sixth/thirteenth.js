const rl=require("readline").createInterface(process.stdin,process.stdout);

process.stdout.write('要素数：');
(async function(){
  var number=await new Promise(res=>rl.once("line",res));
  var elements = [];
  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    var value=await new Promise(res=>rl.once("line",res));
    var NumberValue = parseFloat(value);
    elements.push(NumberValue);
  }

  console.log("要素をかき混ぜました。");
  for(var i = number - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = elements[i];
    elements[i] = elements[j];
    elements[j] = tmp;
  }
  for(var n=0;n<number;n++){
    process.stdout.write("a["+n+"]=");
    console.log(elements[n]);
  }

  process.exit();
})();