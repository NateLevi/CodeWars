function alphabetWar(fight)
{
  let leftSidePoints = 0
  let rightSidePoints = 0
  for (let i = 0; i < fight.length; i++) {
  fight[i] === 'm' ? rightSidePoints += 4 :
  fight[i] === 'q' ? rightSidePoints += 3 :
  fight[i] === 'd' ? rightSidePoints += 2 :
  fight[i] === 'z' ? rightSidePoints += 1 :
  fight[i] === 'w' ? leftSidePoints  += 4 :
  fight[i] === 'p' ? leftSidePoints  += 3 :
  fight[i] === 'b' ? leftSidePoints  += 2 :
  fight[i] === 's' ? leftSidePoints  += 1 :
  0;
}
  if (leftSidePoints > rightSidePoints) {
  return "Left side wins!";
} else if (leftSidePoints < rightSidePoints) {
  return "Right side wins!";
} else {
  return "Let's fight again!";
}
}
/*
P: small letters
R: sentence string dependent on the letters in fight
E: ['zzzzs'] -> Right side wins!
*/
