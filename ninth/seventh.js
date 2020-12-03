class Period {
  constructor(DayFrom, ToDay){
    this.DayFrom = DayFrom;
    this.ToDay = ToDay;
  }

  getDayFrom() {
    return this.DayFrom
  }
  getToDay() {
    return this.ToDay
  }

  static FromDayToDay(DayFrom, ToDay){
    return DayFrom+"〜"+ToDay;
  }
}