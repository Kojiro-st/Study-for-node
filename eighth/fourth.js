class Car{
  constructor(name, number, width, height, length, Xposition, Yposition, capacity, energy, FuelEconomy) {
    this.name = name;
    this.number = number;
    this.height = height;
    this.width = width;
    this.length = length;
    this.Xposition = Xposition;
    this.Yposition = Yposition;
    this.capacity = capacity;
    this.energy = energy;
    this.FuelEconomy = FuelEconomy;
  }

  // getName() {
  //   return this.name;
  // }

  // static GetXposition(Xposition) {
  //   return Xposition;
  // }
  // static GetYposition(Yposition) {
  //   return Yposition;
  // }
  // static SetFuelEconomy(FuelEconomy) {
  //   return FuelEconomy;
  // }

  static ShowTheSpec(name, number, width, height, length, capacity, FuelEconomy) {
    console.log("名前："+name);
    console.log("ナンバー："+number);
    console.log("車幅："+width+"mm");
    console.log("車高："+height+"mm");
    console.log("車長："+length+"mm");
    console.log("タンク："+capacity+"リットル");
    console.log("燃費："+FuelEconomy+"km/リットル");
  }

  static Distance(Xposition, Yposition, capacity, FuelEconomy) {
    var distance = capacity/FuelEconomy;
    if(distance>energy){
      return false;
    }else{
      Xposition += dx;
    Yposition += dy;
    return Math.hypot(dx, dy);
    }
  }

  static Refuel(df){
    if(df>0){
      energy += df;
      if(energy>capacity){
        energy=capacity;
      }
    }
  }
}

var vitz = Car.ShowTheSpec('ビッツ', '福岡99ん99-99', 1660, 1500, 3640, 40.0, 12.0, 1000);
console.log(vitz);
console.log();
var march = Car.ShowTheSpec('マーチ', '福岡99ん99-98', 1660, 1525, 3695, 41.0, 12.0);
console.log(march);