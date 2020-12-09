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

  static Move(dx, dy, fuel){
    var distance = dx*dx +dy*dy;
    if(distance>fuel){
      return false;
    }else{
      fuel=-distance;
      var x = x+dx;
      var y= y+dy;
      console.log(true);
      
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

Car.Move(10, 10, 500);
Car.CalculateTotalDistance(10, 10);