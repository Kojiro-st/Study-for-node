class ShowCharacterCode{
  static Count(){
    for(var i=0x21 ; i<=0x7e; i++){
      var char = String.fromCharCode(i);
      var number = i;
      console.log(char+" "+number);
    }
  }
}

ShowCharacterCode.Count();
