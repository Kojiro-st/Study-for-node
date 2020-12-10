// コマンドラインにはyear、monthの順番に入力すると仮定する

class Calender{
  // 各月の日数を定義
  mday(){
    var mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return mday;
  }

  // year年month月day日の曜日を求める
  dayOfTheWeek(year, month, day){
    if(month==1 || month==2){
      year--;
      month+=12;
    }
    return (year + year/4 - year/100 + year/400 + (13*month + 8)/5 + day)/7;
  }

  // year年が閏年かどうかを調べる
  isLeap(year){
    return (year%4==0 && year%100 !=0 || year%400 ==0);
  }

  // year年month月の日数
  monthDays(year, month){
    if(month-- !=2){
      return mDay[month];
    }
    return mDay[month]+(isLeap(year)?1:0);
  }

  // year年month月のカレンダーの表示
  putCalender(year, month){
    var wd = dayOfTheWeek(year, month, 1);
    var mDays = monthDays(year, month);

    console.log(` 日 月 火 水 木 金 `);
    console.log(`-----------------`);

    for(var n=0; n<wd; n++){
      process.stdout.write(' ');
    }
    for(var i=1; i<=mDays; i++){
      console.log("%3d",i);
      // %3dって何？
      if(++wd%7==0){
        console.log();
      }
    }
    console.log();
  }

  main(){
    var year =1;
    var month = 1;

    if(process.argv.length<2){
      // 現在の日付を取り出して現在の月のカレンダーを表示する
    }else{
      if(process.argv.length>2){
        year = process.argv[2];
        if(year < 0){
          console.log(`年の指定が不正です。`);
          return;
        }
      }
      if(process.argv.length>3){
        month = process.argv[3];
        if(month>12 || month<1){
          console.log(`月の指定が不正です。`);
          return;
        }
      }
    }
    if(process.argv.length <3 || process.argv.length >4){
      console.log(`${year}年${month}月のカレンダー`);
      putCalender(year, month);
    }else{
      console.log(`${year}年のカレンダー`);
      for(var n=1; n<=12; n++){
        console.log(`${month}月`);
        putCalender(year, month);
        console.log();
      }
    }
  }
}

var test = new Calender;

test.main();