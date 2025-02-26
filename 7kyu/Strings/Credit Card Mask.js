// return masked string
function maskify(cc) {
  if (cc.length <= 4) return cc;
  
  const result = cc.slice(0,-4).replace(/./g, '#') + cc.slice(-4);
  return result;
}
/*
P: string of numbers or letters
R: that string but last four characters are #
E: '12345678910' -> '12345####'
*/
