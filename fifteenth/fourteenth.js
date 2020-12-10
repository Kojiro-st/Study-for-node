class Output{
  commandLine(){
    var sum = 1;
    for(var i = 0; i<process.argv.length-2; i++){
      sum*=process.argv[i+2];
    }
    console.log(`合計は${sum}です。`);
  }
}

var testOutput = new Output;

testOutput.commandLine(process.argv);