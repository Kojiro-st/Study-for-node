class Car{
  constructor(name, number, width, height, length, xPosition, yPosition, capacity, energy, fuelEconomy) {
    this.name = name;
    this.number = number;
    this.height = height;
    this.width = width;
    this.length = length;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.capacity = capacity;
    this.energy = energy;
    this.fuelEconomy = fuelEconomy;
  }

  static GetXposition(xPosition) {
    return xPosition;
  }
  static GetYposition(yPosition) {
    return yPosition;
  }
  static SetFuelEconomy(fuelEconomy) {
    return fuelEconomy;
  }

  static ShowTheSpec(name, number, width, height, length, capacity, energy, fuelEconomy) {
    console.log("名前："+name);
    console.log("ナンバー："+number);
    console.log("車幅："+width+"mm");
    console.log("車高："+height+"mm");
    console.log("車長："+length+"mm");
    console.log("タンク："+capacity+"リットル");
    console.log("燃費："+fuelEconomy+"km/リットル");
  }

  static Distance(xPosition, yPosition, capacity, fuelEconomy) {
    var distance = capacity/fuelEconomy;
    if(distance>energy){
      return false;
    }else{
      xPosition += dx;
      yPosition += dy;
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