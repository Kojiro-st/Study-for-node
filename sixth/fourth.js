// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// function randomIntMinMax(min, max){
//   var rand = Math.floor(Math.random() * (max + 1 - min)) + min;
//   return rand
// }

// var RandmNumber = randomIntMinMax(1, 10);
// console.log('要素数：');
// rl.prompt()
// rl.on('line', ElementNumber => {
//   var elements = [];
//   for(n=0;n<ElementNumber; n++){
//     elements[n] = RandmNumber;
//     for(i=10;i>=1; i--){
//       for(p=0;p<ElementNumber; p++){
//         if(elements[p]>=i){
//           process.stdout.write('* ');
//           // console.log('');
//         }else{
//           process.stdout.write('  ');
//           // console.log('');
//         }
//       }
//     }
//   }
//   console.log('');
//   for(m = 0;m<2*ElementNumber;m++){
//     process.stdout.write('-');
//   }
//   console.log('');
//   for(l = 0;l<ElementNumber;l++){
//     process.stdout.write(l%10+' ');
//   }
//   rl.close()
// })
// rl.on('close', () => {
//   console.log('');
// })

//4.要素数を入力する。配列の要素に1〜10の乱数を代入し、各要素の値を縦向きの棒グラフ(*)で表示する。最下段にはインデックスを10で割った余りを表示

const readline = require('readline');

//メイン処理
const main = async () => {

   const elementCount = await prompt('要素数：');
   let array = new Array(elementCount);

   //配列に乱数を詰め込む
   for(let i = 0; i < elementCount; i++){
       const randomInt = randomInteger();
       array[i] = randomInt;
   }
   //表示
   for(let i = 10; i >= 1; i--){
       for(let j = 0; j < elementCount; j++){
           if(array[j] >= i){
               process.stdout.write('* ');
           }else{
               process.stdout.write('  ');
           }
       }
       console.log('');
   }
   //---------表示
   for(let i = 0; i < elementCount * 2; i++){
       process.stdout.write('-');
   }
   console.log('');
   //インデックス
   for(let i = 0; i < elementCount; i++){
       process.stdout.write(`${i % 10} `);
   }
   console.log('');
};


//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseInt(answer);
};

//標準入力
const question = (question) => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readlineInterface.question(question, (answer) => {
            resolve(answer);
            readlineInterface.close();
        });
    });
};

//ランダムな整数生成
const randomInteger = () =>{
    return Math.ceil( Math.random()*10);
}

// 起動
(async () => {
    await main();
})();