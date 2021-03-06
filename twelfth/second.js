class Car{
  constructor(name, width, height, length, fuel, DayPurchasing, x, y){
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.fuel = fuel;
    this.DayPurchasing = DayPurchasing;
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getFuel() {
    return this.fuel;
  }

  getDayPurchasing() {
    return this.DayPurchasing;
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
  constructor(TotalDistance, fuel, DayPurchasing, name, width, height, length, x, y){
    super()
    this.TotalDistance = TotalDistance;
    this.fuel = fuel;
    this.DayPurchasing = DayPurchasing;
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.fuel = fuel;
    this.x = x;
    this.y = y;
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

var instance = new ExCar(100, 100, 20201010, "インスタンス", 100, 100, 100, 100, 0.00, 0.00);

console.log("現在位置("+instance.getX()+instance.getY()+")");
console.log("残り燃料("+instance.getFuel()+")");
console.log("購入日("+instance.getDayPurchasing()+")");