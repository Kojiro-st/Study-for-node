class Day {
  UsualMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  LeapMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  constructor() {
  }
  constructor(day, month, year) {
    if(this.month > 12){
      this.month = 12;
    }
    if(this.month < 1){
      this.month = 1;
    }
    if(this.day<1){
      this.day =1;
    }
    for(var n=1; n<=12; n++){
      if(this.day>UsualMonth[n-1]){
        this.day = UsualMonth[n-1];
      }
      if(this.day>LeapMonth[n-1]){
        this.day = LeapMonth[n-1];
      }
    }
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

  // 閏年判定
  static Leap(year){
    if(year%4==0 && year%100!==0 || year%400==0){
      return true;
    }else{
      return false;
    }
  }

  // 日付が属する年が閏年であるかの確認
  static ConfirmLeap(year){
    return Leap(year);
  }

  // 年内での経過日数
  static CountDays(day, month, year){
    if(Leap(year) == true){
      for(var n=0; n<month; n++){
        var CountMonth =+ LeapMonth[n];
      }
      return day+CountMonth;
    }
    if(Leap(year) == false){
      for(var n=0; n<month; n++){
        var CountMonth =+ UsualMonth[n];
      }
      return day+CountMonth;
    }
  }

  // 年内の残りの日数を求める
  static LeftDays(day, month, year){
    if(Leap(year) == true){
      return 366-CountDays(day, month, year);
    }
    if(Leap(year) == false){
      return 365-CountDays(day, month, year);
    }
  }

  // 他の日付との前後関係(他の日付との前後関係も比較できる)
  static EqualDate(FirstDay, FirstMonth, FirstYear, SecondDay, SecondMonth, SecondYear){
    var TestDate = CountDays(FirstDay, FirstMonth, FirstYear) - CountDays(SecondDay, SecondMonth, SecondYear);
    if(TestDate>0){
      return true;
    }else if(TestDate==0){
      console.log("同じです。");
    }else{
      return false;
    }
  }

  // 日付を1つ後ろに進めるだけ
  static BackOneDay(day, month, year){
    if(Leap(year)==true){
      if(day==1){
        if(month==1){
          year =-1;
          month = 12;
          day = 31;
        }
        month =-1;
        day = LeapMonth[month-2];
      }else{
        day =-1;
      }
    }else{
      if(day==1){
        if(month==1){
          year =-1;
          month = 12;
          day = 31;
        }
        month =-1;
        day =-1;
      }else{
        day =-1;
      }
    }
  }

  // 日付を1つ後ろに進めて返却するメソッド
  static ReturnBackOneDay(day, month, year){
    if(Leap(year)==true){
      if(day==1){
        if(month==1){
          return (year-1)+"年"+12+"月"+31+"日";
        }
        return (year-1)+"年"+(month-1)+"月"+LeapMonth[month-2]+"日";
      }else{
        day =-1;
        return year+"年"+month+"月"+(day-1)+"日";
      }
    }else{
      if(day==1){
        if(month==1){
          return (year-1)+"年"+12+"月"+31+"日";
        }
        return (year-1)+"年"+(month-1)+"月"+LeapMonth[month-2]+"日";
      }else{
        return year+"年"+month+"月"+(day-1)+"日";
      }
    }
  }

  // 日付を1つ前に進めるだけ
  static ProceedOneDay(day, month, year){
    if(Leap(year)==true){
      if(LeapMonth[month-1]==day){
        if(month==12){
          year =+1;
          month = 1;
          day = 1;
        }
        month =+1;
        day =1;
      }else{
        day =1;
      }
    }else{
      if(UsualMonth[month-1]==day){
        if(month==12){
          year =+1;
          month = 1;
          day = 1;
        }
        month =+1;
        day =1;
      }else{
        month =+1;
        day =1;
      }
    }
  }

  // 日付を1つ前に進めて返却するメソッド
  static ReturnProceedOneDay(day, month, year){
    if(Leap(year)==true){
      if(LeapMonth[month-1]==day){
        if(month==12){
          return (year+1)+"年"+1+"月"+1+"日";
        }
        return year+"年"+(month+1)+"月"+1+"日";
      }else{
        return year+"年"+month+"月"+(day+1)+"日";
      }
    }else{
      if(UsualMonth[month-1]==day){
        if(month==12){
          return (year+1)+"年"+1+"月"+1+"日";
        }
        return year+"年"+(month+1)+"月"+1+"日";
      }else{
        return year+"年"+(month+1)+"月"+(day+1)+"日";
      }
    }
  }

  // 日付をnつ後ろに進めるだけ
  static ProceedNDay(day, month, year,n){
    for(var m=1; m<=n; n++){
      ProceedOneDay(day, month, year);
    }
  }

  // 日付をnつ後ろに進めて返却するメソッド
  static ReturnProceedNDay(day, month, year,n){
    ProceedNDay(day, month, year,n);
    return day, month, year;
  }

  // 日付をnつ前に進めるだけ
  static BackNDay(day, month, year,n){
    for(var m=1; m<=n; n++){
      BackOneDay(day, month, year);
    }
  }

  // 日付をnつ前に進めて返却するメソッド
  static ReturnBackNDay(day, month, year,n){
    BackNDay(day, month, year,n);
    return day, month, year;
  }
}

