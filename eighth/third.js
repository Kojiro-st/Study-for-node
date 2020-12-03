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

  static GetXposition(Xposition) {
    return Xposition;
  }
  static GetYposition(Yposition) {
    return Yposition;
  }
  static SetFuelEconomy(FuelEconomy) {
    return FuelEconomy;
  }
  static ShowTheSpec(name, number, width, height, length, Xposition, Yposition, capacity, energy, FuelEconomy) {
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