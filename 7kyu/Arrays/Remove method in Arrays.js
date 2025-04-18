Array.prototype.remove = function(index) {
  if (typeof index !== 'number' || index < 0){
    return this;
  }
  else{
    this.splice(index,1)
    return this
  }
};
/*
P: array of numbers
R: the element based on the number 
E:var someArray = [1, 2, 3];
someArray.remove(1);
*/
