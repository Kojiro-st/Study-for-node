// 9-1の問題点
// ・要素をとりあえず生成しておくことができない→GetXandYpositionで問題ないのでは？
// ・2つの座標が等しいかどうかの判定→メソッドTest_Equal_XandYの作成
// ・座標表示のたびに2つのゲッタを呼び出す必要がある→メソッドで新たな配列を作成すればいい。

class Coodinate{
  constructor(Xposition, Yposition) {
    this.Xposition = Xposition;
    this.Yposition = Yposition;
  }

  getX() {
    return this.Xposition;
  }

  getY() {
    return this.Yposition;
  }

  static GetXandYposition(location) {
    var NewX = location.getX();
    var NewY = location.getY();
    return NewX,NewY;
  }

  static Test_Equal_XandY(locationA, locationB){
    var NewAX = locationA.getX();
    var NewAY = locationA.getY();
    var NewBX = locationB.getX();
    var NewBY = locationB.getY();
    if(NewAX == NewBX && NewAY == NewBY){
      return true;
    }else{
      return false;
    }
  }

  static Put_LocationIntoArray(location){
    var NewX = location.getX();
    var NewY = location.getY();
    var Array = [NewX, NewY];
    return Array;
  }
}
