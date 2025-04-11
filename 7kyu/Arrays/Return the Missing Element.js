function getMissingElement(superImportantArray){
  const nums = [0,1,2,3,4,5,6,7,8,9]
  
  return nums.find(e => !superImportantArray.includes(e))
}
/*
P: array with missing element 0-9
R: return missing element
E: [1,2,4]->3
P: sort array, compare element to a variable 0-9, if not included then return that element?
*/
