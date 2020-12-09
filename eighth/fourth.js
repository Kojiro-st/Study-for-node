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

  getName() {
    return this.name;
  }

  static getXposition(xPosition) {
    return xPosition;
  }
  static getYposition(yPosition) {
    return yPosition;
  }
  static getFuelEconomy(fuelEconomy) {
    return fuelEconomy;
  }

  showTheSpec(name, number, width, height, length, capacity, fuelEconomy) {
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

var vitz = new Car('ビッツ', '福岡99ん99-99', 1660, 1500, 3640, 40.0, 12.0, 1000, 100, 100);
vitz.showTheSpec('ビッツ', '福岡99ん99-99', 1660, 1500, 3640, 40.0, 12.0, 1000);

console.log();

var march = new Car('マーチ', '福岡99ん99-98', 1660, 1525, 3695, 41.0, 12.0, 1000, 100, 100);
march.showTheSpec('マーチ', '福岡99ん99-98', 1660, 1525, 3695, 41.0, 12.0);