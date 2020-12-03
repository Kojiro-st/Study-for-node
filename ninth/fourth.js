// 必要なこと
// ・初期化
// ・曜日を求める
// ・自分の求める日付と等しいのかを確認
// ・曜日、日付を返却

class Day {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
  getYear() {
    return this.year;
  }

  static DayOfTheWeek(day, month, year){
    if(month==1 || month==2){
      year--;
      month += 12;
    }
    return (year + year/4 - y/100 + y/400 + (13*month + 8)/5 +date)%7;
  }

  static EqualDay(day){
    return day.year == Day.getYear && day.month == Day.getMonth && day.day == Day.getDay;
  }

  // static ()
}