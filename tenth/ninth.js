class Position{
  constructor(Xposition, Yposition){
    this.Xposition = 0;
    this.Yposition = 0;
  }

  getX() {
    return this.Xposition;
  }

  getY() {
    return this.Yposition;
  }

  static GetXandYposition(location, date) {
    var NewX = location.getX();
    var NewY = location.getY();
    if(NewX == null){
      NewX = 0;
      return NewX,NewY;
    }else if(NewY == null){
    NewY = 0;
    return NewX,NewY;
    }else{
      return NewX,NewY;
    }
  }


  static MakePosition(Xposition, Yposition){
  }
}