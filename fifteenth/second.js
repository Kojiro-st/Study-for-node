class Strings{
  constructor(){
  }

  static ProduceStrings(){
    var string = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var s1 = "ABC";
    var s2 = string;
    var s3 = string[3];
    // var s4 = ABC.toString();

    console.log("文字列：");
    console.log(`s1 = ${s1}`);
    console.log(`s2 = ${s2}`);
    console.log(`s3 = ${s3}`);
    // console.log(`s4 = "${s4}`);
  }
}

Strings.ProduceStrings();