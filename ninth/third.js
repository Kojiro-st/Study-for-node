const rl=require("readline").createInterface(process.stdin,process.stdout);

class Human {
  static counter = 0;
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width
    // this.id = ++counter;
    id = ++counter;
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

  PutElementIntoArray(name, height, width){
    var Array = [name, height, width];
    return Array;
  }

  static PutElementIntoMultipleArray(FirstHuman, SecondHuman, ThirdHuman, FourthHuman, FifthHuman, SixthHuman,){
    var ArratLine =[];
    var ArrayColumn = [];
    for(var n=0; n<3; n++){
      for(var i=0; i<2; i++){
        ArrayLine.push
      }
    }
  }
}

class HumanArryTester extends Human{
  static counter = 0;
  Person = [];
  constructor(){
    super(name, height, width)
    // this.id = ++counter;
    id = ++counter;
  }

  Person =[new Human("高原徹也", 160, 60), new Human("高原徹也", 160, 59)];

  MakeArray(){
    (async function(){
      process.stdout.write('配列qの要素数:');
      var q = await new Promise(res=>rl.once("line",res));
      for(var n=0; n<q; n++){
        process.stdout.write('名前:');
        var name = await new Promise(res=>rl.once("line",res));
        process.stdout.write('身長:');
        var height = await new Promise(res=>rl.once("line",res));
        process.stdout.write('体重:');
        var weight = await new Promise(res=>rl.once("line",res));
        Person[n] =[name, height, weight]; 
      }
      process.exit();
    })();
  }

  PrintHumanArray(Person){
    for(var n=1; n<=this.Person.length; n++){
      console.log(this.Person[n-1]);
    }
  }
}

// 配列を初期化するパターンを使用して作成してみよう
// $を使用するやり方を知る必要があるな。