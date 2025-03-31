function checkExam(array1, array2) {
  let total = 0;
  for (let i = 0; i < array2.length; i++){
    if (array2[i] === array1[i]) {
      total += 4;
    } else if (array2[i] === "") {  // No answer given, no penalty.
      total += 0;
    } else {  // Wrong answer.
      total -= 1;
    }
  }
  return total > 0 ? total : 0;
}

/*
P: array1 = key to correct answers, array2 = students submitted answers
R: return score of array of answers: +4 correct, -1 incorrect, +0 blank or "", score < 0 return 0
E: ["a", "a", "b", "b"] | ["a", "c", "b", "d"] -> 6
P: compare arrays, if array2 has same then accumulate the total number. Loop through array2 if the elements have the same index
*/
