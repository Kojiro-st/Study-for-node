// 必要なこと
// ・初期化
// ・曜日を求める
// ・自分の求める日付と等しいのかを確認
// ・曜日、日付を返却

const rl=require("readline").createInterface(process.stdin,process.stdout);

class Day {
  constructor(day, month, year) {
    if(day===undefined){
      this.day = 1;
    }else if(month===undefined){
      this.month = 1;
    }else if(year===undefined){
      this.year = 1;
    }
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

  // gettheDay(){
  //   return this.day, this.month, this.year;
  // }

  setDay(day) {
    this.day = day;
    return;
  }
  setMonth(month) {
    this.month = month;
    return;
  }
  setYear(year) {
    this.year = year;
    return;
  }

  setTheDay(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    return;
  }

  // 曜日を求める
  DayOfTheWeek(day, month, year){
    if(month==1 || month==2){
      year--;
      month += 12;
    }
    var dayOfTheWeek =  (year + year/4 - year/100 + year/400 + (13*month + 8)/5 +day)%7;
    dayOfTheWeek = Math.floor(dayOfTheWeek);
    switch(dayOfTheWeek){
      case 0:
        return "日";
      case 1:
        return "月";
      case 2:
        return "火";
      case 3:
        return "水";
      case 4:
        return "木";
      case 5:
        return "金";
      case 6:
        return "土";
    }
  }

  // trueかfalseで返す必要があるな。
  EqualDay(theDay, year, month, day){
    if (year == theDay.getYear && month == theDay.getMonth && day == theDay.getDay){
      return true
    }else{
      return false
    }
  }

  // 日付の曜日を返すプログラムを作成する
  Date(year, month, day){
    return `${year}年${month}月${day}日`;
  }
}

var D = new Day(2017, 5, 25);

(async function(){
  console.log("day1を入力せよ。");
  process.stdout.write(`年：`);
  var year = await new Promise(res=>rl.once("line",res));
  process.stdout.write(`月：`);
  var month = await new Promise(res=>rl.once("line",res));
  process.stdout.write(`日：`);
  var day = await new Promise(res=>rl.once("line",res));
  console.log(`day1 = ${year}年${month}月${day}日(${D.DayOfTheWeek(day, month, year)})`);
  console.log(`day2をday1と同じ日付として作りました。`);
  console.log(`day1 = ${year}年${month}月${day}日(${D.DayOfTheWeek(day, month, year)})`);
  console.log(`day1とday2は等しいです。`);
  var d1 = D.Date.constructor;
  var d2 = D.setYear(2017);
  var d3 = D.setTheDay(2017, 5);
  var d4 = D.setTheDay(2017, 5, 25);
  console.log(`d1=${d1}`);
  console.log(`d2=${d2}`);
  console.log(`d4=${d3}`);
  console.log(`d4=${d4}`);
  var a = [];
  for(var n=0; n<4; n++){
    a[n] = D.Date();
  }
  for(var n=0; n<4; n++){
    console.log(`a[${n}]=${a[n]}`);
  }
  process.exit();
})();