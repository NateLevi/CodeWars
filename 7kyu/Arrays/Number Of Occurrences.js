Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    let count = 0
    for(let num of this){
      if(num === element){count++}
    }
    return count
  }
});

//Learned: javascript has a descriptor object on all properties. You can change the descriptor with Object.defineProperty. In this example we added a method universally to the Array object. You can use this to directly access the array. 
