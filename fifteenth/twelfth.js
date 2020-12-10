class Output{
  commandLine(){
    for(var i = 0;i < process.argv.length-2; i++){
      console.log("argv[" + i + "] = " + process.argv[i+2]);
    }
  }
}

var testOutput = new Output;

testOutput.commandLine(process.argv);