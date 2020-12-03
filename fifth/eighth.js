// stringとnumberの型で比較を行った

var number = 0;
var string = 0;

console.log("   number                       string   ");
console.log("-----------------------------------------");
for(var n=0; n<=1000; n++){
  number += 0.001;
  string = n/1000;
  console.log("   "+number+"                       "+string+"   ");
}