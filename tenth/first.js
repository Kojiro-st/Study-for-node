class Human {
  constructor(name, height, weight, id) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.id = 1;
  }

  getName() {
    return this.name;
  }
  getHeight() {
    return this.height;
  }
  getWeight() {
    return this.weight;
  }
  getId(){
    return this.id;
  }

  static MakeDifference(name, height, weight){

  }
}

var suzuki = new Human('鈴木二郎', '170cm', '60kg');
var takada = new Human('高田龍一', '66cm', '72kg');

console.log("名前："+suzuki.getName());
console.log("身長："+suzuki.getHeight());
console.log("体重："+suzuki.getWeight());
console.log("番号："+suzuki.getId());

console.log("名前："+takada.getName());
console.log("身長："+takada.getHeight());
console.log("体重："+takada.getWeight());