class Car{
  constructor(name, number, width, height, length, xPosition, yPosition, capacity, energy, fuelEconomy) {
    this.name = name;
    this.number = number;
    this.height = height;
    this.width = width;
    this.length = length;
    this.xPosition = 0;
    this.yPosition = 0;
    this.capacity = capacity;
    this.energy = energy;
    this.fuelEconomy = fuelEconomy;
  }

  getXposition(xPosition) {
    return xPosition;
  }
  getYposition(yPosition) {
    return yPosition;
  }
  setFuelEconomy(fuelEconomy) {
    return fuelEconomy;
  }

  // showTheSpec(name, number, width, height, length, capacity, fuelEconomy) {
  showTheSpec() {
    console.log(`名前：${this.name}`);
    console.log(`ナンバー：${this.number}`);
    console.log(`車幅：${this.width}mm`);
    console.log(`車高：${this.height}mm`);
    console.log(`車長：${this.length}mm`);
    console.log(`タンク：${this.capacity}リットル`);
    console.log(`燃費：${this.fuelEconomy}km/リットル`);
  }

  Distance(xPosition, yPosition, capacity, fuelEconomy) {
    var distance = capacity/fuelEconomy;
    if(distance>energy){
      return false;
    }else{
      xPosition += dx;
      yPosition += dy;
    return Math.hypot(dx, dy);
    }
  }

  Refuel(df){
    if(df>0){
      energy += df;
      if(energy>capacity){
        energy=capacity;
      }
    }
  }
}

var vitz = new Car('ビッツ', '福岡99ん99-99', 1660, 1500, 3640, 40.0, 12.0, 1000, 100, 100);
vitz.showTheSpec();

console.log();

var march = new Car('マーチ', '福岡99ん99-98', 1660, 1525, 3695, 41.0, 12.0, 1000, 100, 100);
march.showTheSpec();