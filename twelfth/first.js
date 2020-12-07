class Car{
  constructor(name, width, height, length, fuel, DayPurchasing, x, y){
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.fuel = fuel;
    this.DayPurchasing = DayPurchasing;
    x = y = 0;
  }

  getX() {
    return x;
  }

  getY() {
    return y;
  }

  getFuel() {
    return fuel;
  }

  getDayPurchasing() {
    return DayPurchasing;
  }

  static Move(dx, dy){
    var distance = dx*dx +dy*dy;
    if(distance>fuel){
      return false;
    }else{
      fuel=-distance;
      x=+dx;
      y=+dy;
      return true;
    }
  }
}

class ExCar extends Car{
  constructor(TotalDistance){
    this.TotalDistance = TotalDistance;
    x = y = 0;
  }

  static CalculateTotalDistance(dx, dy){
    var TotalDistance = dx*dx + dy*dy;
    return TotalDistance;
  }
}

// 算出する
console.log(ExCar.getFuel(10));
