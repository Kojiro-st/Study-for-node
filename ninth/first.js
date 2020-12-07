class Coodinate{
  constructor(Xposition, Yposition) {
    this.Xposition = Xposition;
    this.Yposition = Yposition;
  }

  // getX() {
  //   return this.Xposition;
  // }

  // getY() {
  //   return this.Yposition;
  // }

  static GetXandYposition(location) {
    var NewX = location.getX();
    var NewY = location.getY();
    return NewX,NewY;
  }
}


// 上記のconsole.log();と以下で返却されるかを検証した
// var trial = new Coodinate(10, 20);
// Coodinate.GetXandYposition(trial);