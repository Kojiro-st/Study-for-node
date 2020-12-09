class Car{
  constructor(DayPurchasing){
    this.DayPurchasing = DayPurchasing;
  }

  getDayPurchasing(DayPurchasing){
    console.log("xの購入日：" + DayPurchasing);
    return;
  }
}

class ExCar extends Car{
  constructor(DayPurchasing, TotalDistance){
    super(DayPurchasing)
    this.TotalDistance = TotalDistance;
  }

  getDayPurchasing(DayPurchasing, TotalDistance){
    console.log("yの購入日：" + DayPurchasing);
    console.log("yの走行距離：" + TotalDistance);
    return;
  }
}

ExCar.getDayPurchasing("2015年12月24日", 0.0);

// class Parent {
//   autoPlay() {
//       this.play("automatically "); // call child method
//   }
//   play(x) {
//       console.log(x+"playing default from "+this.constructor.name);
//   }
// }

// class ChildA extends Parent {
//   // does not override play
// }
// class ChildB extends Parent {
//   constructor(song) {
//       super();
//       this.song = this;
//   }
//   play(x) {
//       console.log(x+"playing "+this.song+" from ChildB");
//   }
// }

// const child1 = new ChildA();
// child1.autoPlay();
// const child2 = new ChildB("'Yeah'");
// child2.autoPlay();