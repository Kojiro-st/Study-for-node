// πは3.14とする。

class Output{
  commandLine(){
    var radius = process.argv[2];
    var circumference = 2*3.14*radius;
    var area = 3.14*radius*3.14;
    console.log(`半径${radius}の円周は${circumference}で面積${area}はです。`);
  }
}

var testOutput = new Output;

testOutput.commandLine();