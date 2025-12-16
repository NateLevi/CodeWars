Array.prototype.even = function(){
  return this.filter(e => Number.isInteger(e) && e % 2 === 0 && e);
};

Array.prototype.odd = function(){
  return this.filter(e => Number.isInteger(e) && e % 2 !== 0 && e);
};

Array.prototype.under = function(x){
  return this.filter(e => Number.isInteger(e) && e < x);
};

Array.prototype.over = function(x){
  return this.filter(e => Number.isInteger(e) && e > x);
};

Array.prototype.inRange = function(min,max){
  return this.filter(e => Number.isInteger(e) && e >= min && e <= max);
};

// I learned that you can add custom methods onto arrays built in by going to the prototype of the universal Array object. with Array.prototype with a function. 
