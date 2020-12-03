// このプログラムで必要なこと
// ・要素の初期化
// ・要素に値を代入()
// ・

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

  static PutElementIntoArray(Human){
    var NewName = Human.getName();
    var NewHeight = Human.getHeight();
    var NeWidth = Human.getWidth();
    var Array = [NewName, NewHeight, NeWidth];
    return Array;
  }
}

