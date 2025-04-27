function treePhotography(trees) {
  let leftCount = 0;
  let tallestLeft = -Infinity;        
  for (let i = 0; i < trees.length; i++) { 
    if (trees[i] > tallestLeft) {
      leftCount++;
      tallestLeft = trees[i];
    }
  }
  let rightCount = 0;
  let tallestRight = -Infinity;
  for (let i = trees.length - 1; i >= 0; i--) {
    if (trees[i] > tallestRight) {
      rightCount++;
      tallestRight = trees[i];
    }
  }
  return leftCount > rightCount ? "left" : "right";
}


/*
P: List of tree heights
R: returns left or right depending on which side allows more trees to be seen
E:
P: Count of visibility from left and right sides. 


*/
