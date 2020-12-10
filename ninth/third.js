const rl=require("readline").createInterface(process.stdin,process.stdout);

class Human {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  getName() {
    return this.name;
  }
  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }
}

class HumanArrayTester extends Human{
  constructor(name, height, width, array, qArray) {
    super(name, height, width)
    this.array = [new Human("桑野慎一郎", 170, 70), new Human("高原徹也", 160, 59)];
    qArray = [];
    this.multipleArray = 
    [[new Human("竹田祥平", 175, 52), new Human("横川智之", 169, 60)],
     [new Human("三宅秀樹", 178, 70), new Human("小林佑介", 172, 61)],
     [new Human("白水祐亮", 168, 59), new Human("田中大喜", 165, 59)]
    ];
  }

  putElementIntoArray(){
    (async function(){
      var arrayElement = [];
      var qArray = [];
      process.stdout.write(`配列qの要素数：`);
      var element = await new Promise(res=>rl.once("line",res));
      for(var n=0; n<element; n++){
        console.log(`q[${n}]`);
        process.stdout.write('名前:');
        var name = await new Promise(res=>rl.once("line",res));
        process.stdout.write('身長:');
        var height = await new Promise(res=>rl.once("line",res));
        process.stdout.write('体重:');
        var weight = await new Promise(res=>rl.once("line",res));
        arrayElement = [name, height, weight];
        qArray.push(arrayElement);
      }
      process.exit();
    })();
  }

  showPutElementIntoArray(){
    // Test.putElementIntoArray();
    (async function(){
      var arrayElement = [];
      var qArray = [];
      process.stdout.write(`配列qの要素数：`);
      var element = await new Promise(res=>rl.once("line",res));
      for(var n=0; n<element; n++){
        console.log(`q[${n}]`);
        process.stdout.write('名前:');
        var name = await new Promise(res=>rl.once("line",res));
        process.stdout.write('身長:');
        var height = await new Promise(res=>rl.once("line",res));
        process.stdout.write('体重:');
        var weight = await new Promise(res=>rl.once("line",res));
        arrayElement = [name, height, weight];
        qArray.push(arrayElement);
      }
      console.log(`■配列p`);
      console.log(`No[0] ${constructor.this.array[0].getName()} ${constructor.this.array[0].getHeight()}cm ${constructor.this.array[0].getWidth()}kg`);
      process.stdout.write(`■配列`);
      var arrayTheme = await new Promise(res=>rl.once("line",res));
      for(var n=0; n<qArray.length; n++){
        console.log(`No[${n+1}] ${qArray[n][0]} ${qArray[n][1]}cm ${qArray[n][2]}kg`);
      }
      process.exit();
    })();
  }

  putElementIntoMultipleArray(){
    var Person = [];
    var PersonLine = [];
    (async function(){
      process.stdout.write(`配列yの行数：`);
      var yLine = await new Promise(res=>rl.once("line",res));
      for(var n=0; n<yLine; n++){
        process.stdout.write(`y[${n}]の列数`);
        var yRow = await new Promise(res=>rl.once("line",res));
        for(var i=0; i<yRow; i++){
          console.log(`y[${n}][${i}]`);
          process.stdout.write('名前:');
          var name = await new Promise(res=>rl.once("line",res));
          process.stdout.write('身長:');
          var height = await new Promise(res=>rl.once("line",res));
          process.stdout.write('体重:');
          var weight = await new Promise(res=>rl.once("line",res));
          Person[n] =[name, height, weight];
          PersonLine.push(Person[n]);
        }
        multipleArray.push(PersonLine);
        PersonLine = [];
      }
      // return multipleArray;
      process.exit();
    })();
  }

  showPutElementIntoMultipleArray(){
    var Person = [];
    var PersonLine = [];
    (async function(){
      process.stdout.write(`配列yの行数：`);
      var yLine = await new Promise(res=>rl.once("line",res));
      for(var n=0; n<yLine; n++){
        process.stdout.write(`y[${n}]の列数`);
        var yRow = await new Promise(res=>rl.once("line",res));
        for(var i=0; i<yRow; i++){
          console.log(`y[${n}][${i}]`);
          process.stdout.write('名前:');
          var name = await new Promise(res=>rl.once("line",res));
          process.stdout.write('身長:');
          var height = await new Promise(res=>rl.once("line",res));
          process.stdout.write('体重:');
          var weight = await new Promise(res=>rl.once("line",res));
          Person[n] =[name, height, weight];
          PersonLine.push(Person[n]);
        }
        multipleArray.push(PersonLine);
        PersonLine = [];
      }
      console.log(`■配列p`);
      console.log(`第0行`);
      console.log(`No[0] ${this.multipleArray[0][0].getName()} ${this.multipleArray[0][0].getHeight()}cm ${this.multipleArray[0][0].getWidth()}kg`);
      console.log(`No[1] ${this.multipleArray[0][1].getName()} ${this.multipleArray[0][1].getHeight()}cm ${this.multipleArray[0][1].getWidth()}kg`);
      console.log(`第1行`);
      console.log(`No[0] ${this.multipleArray[1][0].getName()} ${this.multipleArray[1][0].getHeight()}cm ${this.multipleArray[1][0].getWidth()}kg`);
      console.log(`No[1] ${this.multipleArray[1][1].getName()} ${this.multipleArray[1][1].getHeight()}cm ${this.multipleArray[1][1].getWidth()}kg`);
      console.log(`第2行`);
      console.log(`No[0] ${this.multipleArray[2][0].getName()} ${this.multipleArray[2][0].getHeight()}cm ${this.multipleArray[2][0].getWidth()}kg`);
      console.log(`No[1] ${this.multipleArray[2][1].getName()} ${this.multipleArray[2][1].getHeight()}cm ${this.multipleArray[2][1].getWidth()}kg`);
      process.stdout.write(`■配列`);
      var arrayTheme = await new Promise(res=>rl.once("line",res));
        for(var n=0; n<yLine; n++){
          console.log(`第${n}行`)
          for(var i=0; i<yRow; i++){
            console.log(`No${i+1} ${multipleArray[n][i][0]} ${multipleArray[n][i][1]}cm ${multipleArray[n][i][2]}kg`);
          }
        }
      process.exit();
    })();
  }
}

var Test = new HumanArrayTester();

Test.showPutElementIntoArray();
Test.showPutElementIntoMultipleArray();