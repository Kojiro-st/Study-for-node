function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

console.log("3個の乱数を生成しました。");
// ①
console.log("1桁の正の整数："+randomIntMinMax(1, 9));


// ②
console.log("1桁の負の整数："+randomIntMinMax(-9, -1));

// ③
console.log("2桁の正の整数："+randomIntMinMax(10, 99));