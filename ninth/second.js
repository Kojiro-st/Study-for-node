// 9-1の問題点
// ・要素をとりあえず生成しておくことができない。インスタンスを生成する時にクラスに引数を取らなければならない。ただ、インスタンスを生成すると行ったことができない。→if文で場合分け
// ・ある座標と同じ座標を持つインスタンスの構築が容易ではない。→
// ・2つの座標が等しいかどうかの判定→メソッドTest_Equal_XandYの作成
// ・座標表示のたびに2つのゲッタを呼び出す必要がある→メソッドで新たな配列を作成すればいい。


const rl=require("readline").createInterface(process.stdin,process.stdout);
class Coodinate{
  constructor(Xposition, Yposition) {
    if(Xposition==undefined && Yposition == undefined){
      this.Xposition = 0.0;
      this.Yposition = 0.0;
    }else if(Xposition==undefined){
      this.Yposition = Yposition;
    }else if(Yposition==undefined){
      this.Xposition = Xposition;
    }else{
      this.Xposition = Xposition;
      this.Yposition = Yposition;
    }
  }

  getX() {
    return this.Xposition;
  }

  getY() {
    return this.Yposition;
  }

  setX(Xposition){
    this.Xposition = Xposition;
  }

  setX(Yposition){
    this.Yposition = Yposition;
  }

  GetXandYposition(Xposition, Yposition) {
    this.Xposition = Xposition;
    this.Yposition = Yposition;
  }

  Test_Equal_XandY(locationA, locationB){
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

  Put_LocationIntoArray(location){
    var NewX = location.getX();
    var NewY = location.getY();
    var Array = [NewX, NewY];
    return Array;
  }

  Put_LocationIntoArray(location){
    var NewX = location.getX();
    var NewY = location.getY();
    var Array = [NewX, NewY];
    return Array;
  }

  MakeLocation(){
    (async function(){
      console.log("座標pを入力せよ。");
      process.stdout.write('X座標:');
      var X = await new Promise(res=>rl.once("line",res));
      process.stdout.write('Y座標:');
      var Y = await new Promise(res=>rl.once("line",res));
      var p =  new Coodinate(X, Y);
      console.log(`p = (${p.getX(X)},${p.getY(Y)})`);
      var q = p;
      p.GetXandYposition(9.9, 9.9);
      console.log(`p = (${p.getX(X)},${p.getY(Y)})`);
      console.log(`q = (${q.getX(X)},${q.getY(Y)})`);
      process.exit();
    })();
  }
}