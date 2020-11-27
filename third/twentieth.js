function randomIntMinMax(min, max){
  var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
  return rand
}

var number = randomIntMinMax(0, 2)

if (number == 0){
  console.log("グー");
}else if(number == 1){
  console.log("チョキ");
}else if(number == 2){
  console.log("パー");
}

// 別解(switch文使用)
// switch (number){
//   case 0:
//     console.log('グー');
//     break;
//   case 1:
//     console.log('チョキ');
//     break;
//   case 2:
//     console.log('パー');
//     break;
// }