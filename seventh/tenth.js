function calculation(x,y,z){
  var rand = Math.floor(Math.random() * 4) + 1;
  var formula = [];
  formula[0] = x+y+z;
  formula[1] = x+y-z;
  formula[2] = x-y+z;
  formula[3] = x-y-z;
  return formula[rand]
}

