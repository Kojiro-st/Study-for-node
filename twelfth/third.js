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

  Move(dx, dy){
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
    super(name, width, height, length, fuel, DayPurchasing, x, y)
    this.TotalDistance = TotalDistance;
  }

  CalculateTotalDistance(dx, dy){
    var TotalDistance = dx*dx + dy*dy;
    return TotalDistance;
  }

  ShowLocationFuelDayPurchasing(TotalDistance, fuel, DayPurchasing){
    var NewX = TotalDistance.getX();
    var NewY = TotalDistance.getY();
    var LeftFuel = fuel.getFuel();
    var TheDayPurchasing = DayPurchasing.getDayPurchasing();
    return NewX, NewY, LeftFuel, TheDayPurchasing;
  }

  putSpec(name, width, height, length, TotalDistance){
    console.log("名前："+name);
    console.log("車幅："+width);
    console.log("車高："+height);
    console.log("車長："+length);
    console.log("総走行距離："+TotalDistance);
    return;
  }
}

var Excar = new ExCar(0.00 , 0, 20201010, "w221", 1845, 1490, 5250, );

console.log(Excar.putSpec("w221", 1845, 1490, 5205, 0.00));