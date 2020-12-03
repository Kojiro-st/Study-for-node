// number型で要素が5個ある配列に値を代入することとする

var array = [];
array.push(5,4,3,2,1);

for(n=0;n<=5;n++){
  array[n]= 1.1 * n;
  console.log("a["+n+"] = "+array[n]);
}

