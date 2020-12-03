// class Human {
  // var name;
  // height;
  // width;

  // constructor(){
  //   this.name = null;
    // this.height = 0;
    // this.width = 0;
//   }
// }

// var suzuki = new Human('鈴木二郎', '170cm', '60kg');
// var takada = new Human('高田龍一', '66cm', '72kg');

// console.log("名前："+suzuki);
// console.log("身長："+suzuki.getHeight());
// console.log("体重："+suzuki.getWidth());

// console.log("名前："+takada.getName());
// console.log("身長："+takada.getHeight());
// console.log("体重："+takada.getWidth());

// インスタンスを作成する必要があるということ？今回行った初期化処理がカリキュラムの意図外？

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

var suzuki = new Human('鈴木二郎', '170cm', '60kg');
var takada = new Human('高田龍一', '66cm', '72kg');

console.log("名前："+suzuki.getName());
console.log("身長："+suzuki.getHeight());
console.log("体重："+suzuki.getWidth());

console.log("名前："+takada.getName());
console.log("身長："+takada.getHeight());
console.log("体重："+takada.getWidth());