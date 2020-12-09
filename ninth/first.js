const rl=require("readline").createInterface(process.stdin,process.stdout);

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


// 上記のconsole.log();と以下で返却されるかを検証した
var trial = new Coodinate(10, 20);
// trial.GetXandYposition(10, 20);

trial.MakeLocation();