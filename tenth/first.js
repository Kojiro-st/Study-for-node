class Human {
  // count=0;
  constructor(name, height, weight, id) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.id ++;
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
  // // getId(){
  // //   return this.id;
  // // }

  static MakeDifference(Human){
    var count = 0;
    var id =+ count;
    var NewName = Human.getName();
    var NewHeight = Human.getHeight();
    var NewWeight = Human.getWeight();
    return NewName, NewHeight, NewWeight, id;
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
console.log("番号："+takada.getId());