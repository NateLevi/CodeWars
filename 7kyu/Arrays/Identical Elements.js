function duplicateElements(m, n) {
  if (m.length === 0 || n.length === 0) return false;
  for (const x of m) {
    if (n.includes(x)) return true;
  }
  return false;
}

/*
P: two arrays of integers
R: return true/false if m and n have atleast one identical element
E: [1,2,3,4,5,6],[2,3,6,4,3]-> true
*/
