function howMuchILoveYou(nbPetals) {
  const remainder = nbPetals % 6
  return remainder === 1 ? "I love you" :
  remainder === 2 ? "a little" :
  remainder === 3 ? "a lot" :
  remainder === 4 ? "passionately" :
  remainder === 5 ? "madly" : "not at all"
}
