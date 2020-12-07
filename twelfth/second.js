class Car{
  constructor(name, width, height, length, fuel, DayPurchasing){
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.fuel = fuel;
    this.DayPurchasing = DayPurchasing;
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
  constructor(TotalDistance, fuel, DayPurchasing){
    super()
    this.TotalDistance = TotalDistance;
    this.fuel = fuel;
    this.DayPurchasing = DayPurchasing;
  }

  static CalculateTotalDistance(dx, dy){
    var TotalDistance = dx*dx + dy*dy;
    return TotalDistance;
  }

  static ShowLocationFuelDayPurchasing(TotalDistance, fuel, DayPurchasing){
    var NewX = TotalDistance.getX();
    var NewY = TotalDistance.getY();
    var LeftFuel = fuel.getFuel();
    var TheDayPurchasing = DayPurchasing.getDayPurchasing();
    return NewX, NewY, LeftFuel, TheDayPurchasing;
  }
}

// console.log(ExCar.CalculateTotalDistance(10, 10));

var instance = new ExCar("インスタンス", 100, 100, 100, 100, 100);

console.log("現在位置("+instance.getX()+instance.getY()+")");
console.log("残り燃料("+instance.getFuel()+")");
console.log("購入日("+instance.getDayPurchasing()+")");



// console.log("現在位置")
// ExCar.ShowLocationFuelDayPurchasing(10, 10, 10);