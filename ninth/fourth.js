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

  // trueかfalseで返す必要があるな。
  static EqualDay(Day){
    if (day.year == Day.getYear && day.month == Day.getMonth && day.day == Day.getDay){
      return true
    }else{
      return false
    }
  }

  // 日付の曜日を返すプログラムを作成する
  static ReturnDayOfTheWeek(){
    if(DayOfTheWeek == 0){
      return "日曜日"
    }else if(DayOfTheWeek == 1){
      return "月曜日"
    }else if(DayOfTheWeek == 2){
      return "火曜日"
    }else if(DayOfTheWeek == 3){
      return "水曜日"
    }else if(DayOfTheWeek == 4){
      return "木曜日"
    }else if(DayOfTheWeek == 5){
      return "金曜日"
    }else if(DayOfTheWeek == 6){
      return "土曜日"
    }
  }
}