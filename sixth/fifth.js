var array = [9,9,9,9,9]

// 初期化する。

for(var n = 1;n<=5;n++){
  array[n-1] = 6-n;
  console.log("a["+(n-1)+"] = "+array[n-1]);
}