// --- Codewars Link: https://www.codewars.com/kata/58b38256e51f1c2af0000081/solutions/javascript
// --- Title: Simple Fun #166: Best Match
// --- Kyu: 5 kyu
// --- Date Solved: 11/24/25

// --- My Solution:
function bestMatch(ALAHLYGoals, zamalekGoals) {
  let min = Infinity
  let index = 0

  for (let i = 0; i < ALAHLYGoals.length; i++) {

    let diff = ALAHLYGoals[i] - zamalekGoals[i]

    if (diff < min) {
      min = diff
      index = i
    }
    else if (diff === min) {
      if (zamalekGoals[i] > zamalekGoals[index]) {
        index = i
      }
    }
  }

  return index
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: min, and conditionals
Specific Note: gpt helped with final conditional, i understand it, i was overthinking it
Key Learning/Reinforcement: nothing
*/

//Alternative Solution Link: 
function bestMatch(ALAHLYGoals, zamalekGoals) {
  var best = {
  	zScoreIndex : 0, 
  	lowestdiff : ALAHLYGoals[0] - zamalekGoals[0]
  };
  for (i = 0; i < ALAHLYGoals.length; i++)	{
  	var diff = ALAHLYGoals[i] - zamalekGoals[i];
  	if (diff < best.lowestdiff)	{
  		best.lowestdiff = diff;
  		best.zScoreIndex = i;
  	} else	{
  		if (diff == best.lowestdiff && zamalekGoals[i] >  zamalekGoals[best.zScoreIndex])	{
			best.zScoreIndex = i;
  		}
  	}
  }
  return best.zScoreIndex;
}
