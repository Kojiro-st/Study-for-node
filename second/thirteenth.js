function randomIntMinMax(min, max){
  var rand = (Math.random() * (max + 1 - min)) + min;
  return rand
}

console.log("3個の乱数を生成しました。");

// ①
console.log("0.0以上1.0未満："+randomIntMinMax(0, 1));

// ②
console.log("0.0以上10.0未満："+randomIntMinMax(0, 10));

// ③
console.log("-1.0以上1.0未満："+randomIntMinMax(-1, 1));