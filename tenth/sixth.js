class Change {
  constructor(number){
    this.number = number;
  }

  static ChangeToNumber(number){
    var π = 3.14;
    var square = Math.sqrt(number);

    process.stdout.write('実数:');
    console.log(number);

    process.stdout.write('絶対値:');
    if(number>=0){
      console.log(number);
    }else{
      console.log(-(number));
    }

    process.stdout.write('平方根:');
    console.log(square);


    process.stdout.write('面 積:');
    console.log(π*number*number);
  }
}

var Try = new Change(5);

