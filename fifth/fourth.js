// 真偽を確かめることはできない上にただconsoleで出力するのでは第5章の意図と合わないので、double型に変換して出力してみます。
var b1 = parseFloat(true);
var b2 = parseFloat(false);

console.log(b1);
console.log(b2);