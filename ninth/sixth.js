class Human {
  constructor(name, height, width, birthday) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.birthday = birthday;
  }
  getName() {
    return this.name;
  }
  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }

  static toString(name, height, width, birthday){
    var NameToString = toString(name);
    var HeightToString = toString(height);
    var WidthToString = toString(width);
    var BirthdayToString = toString(birthday);
    return NameToString, HeightToString, WidthToString, BirthdayToString;
  }
}