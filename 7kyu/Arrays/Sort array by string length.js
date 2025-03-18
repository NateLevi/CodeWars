function sortByLength (array) {
  return array.sort((a,b)=>a.length-b.length).map((element)=>element)
}
/*
P: array of strings
R: sorted array of the same strings from shortest to longest
E: ["bye","hi","later"] -> ['hi','bye','later']
*/
