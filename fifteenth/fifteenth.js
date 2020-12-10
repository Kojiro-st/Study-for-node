// コマンドラインにはyear、monthの順番に入力すると仮定する

class Calender{
  // 各月の日数を定義
  // mDay(number){
  //   var mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //   return mday[number];
  // }

  // year年month月day日の曜日を求める
  dayOfTheWeek(year, month, day){
    if(month==1 || month==2){
      year--;
      month+=12;
    }
    var integer = Math.floor((year + year/4 - year/100 + year/400 + (13*month + 8)/5 + day)%7);
    return integer+1;
  }

  // year年が閏年かどうかを調べる
  isLeap(year){
    return (year%4==0 && year%100 !=0 || year%400 ==0);
  }

  // year年month月の日数
  monthDays(year, month){
    var mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(month-- !=2){
      return mday[month];
    }
    if (this.isLeap(year) === true){
      var number = 1;
    }else{
      var number = 0;
    }
    return (mday[month-1])+(number);
  }

  // year年month月のカレンダーの表示
  putCalender(year, month){
    var wd = this.dayOfTheWeek(year, month, 1);
    var mDays = this.monthDays(year, month);
    // mDaysは合っているっぽい。

    console.log(` 日 月 火 水 木 金 土`);
    console.log(`----------------------`);

    for(var n=0; n<wd; n++){
      process.stdout.write('   ');
    }
    for(var i=1; i<=mDays; i++){
      if(i<10){
        process.stdout.write(` ${i} `);
      }else{
        process.stdout.write(` ${i}`);
      }
      if(++wd%7==0){
        console.log();
      }
    }
    console.log();
  }

  main(){
    var year =1;
    var month = 1;

    if(process.argv.length<3){
      // 現在の日付を取り出して現在の月のカレンダーを表示する
      var today = new Date();
      year = today.getFullYear();
      month = today.getMonth()+1;
      var day = today.getDate();
      this.putCalender(year, month)
    }else{
      if(process.argv.length<4){
        if(process.argv[2] < 0){
          console.log(`年の指定が不正です。`);
          return;
        }else{
          year = process.argv[2];
          console.log(`${year}年のカレンダー`);
          for(var n=1; n<=12; n++){
            this.putCalender(year, n);
            console.log();
          }
        }
      }
      if(process.argv.length<5){
        if(process.argv[3]>12 || process.argv[3]<1){
          console.log(`月の指定が不正です。`);
          return;
        }
        year = process.argv[2];
        month = process.argv[3];
        this.putCalender(year, month);
      }
    }
    // if(process.argv.length <3 || process.argv.length >4){
    //   year = process.argv[2];
    //   console.log(`${year}年${month}月のカレンダー`);
    //   this.putCalender(year, month);
    // }else{
    //   console.log(`${year}年のカレンダー`);
    //   for(var n=1; n<=12; n++){
    //     console.log(`${month}月`);
    //     this.putCalender(year, month);
    //     console.log();
    //   }
    // }
  }
}

var test = new Calender;

test.main();

// 各メソッドが正常に動いているのかを確認する
// test.dayOfTheWeek(2020,12,10);
// test.isLeap(2020);
// test.monthDays(2020,2);
// test.putCalender(2020,12);
