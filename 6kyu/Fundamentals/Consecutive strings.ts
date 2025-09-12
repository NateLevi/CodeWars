// --- Codewars Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
// --- Title: Consecutive strings
// --- Kyu: 6 kyu
// --- Date Solved: 9/12/25

// --- My Solution:
function longestConsec(strarr, k) {
  
    if (strarr.length === 0 || k > strarr.length || k <= 0) return ""
  
    let arr = []
    
    for(let i=0; i < strarr.length;i++){
      arr.push(strarr.slice(i, i+k).join(""))
    }
    
    let arrLengths = arr.map(e=> e.length)
    let indexLen = arrLengths.indexOf(Math.max(...arrLengths))
    
    return arr[indexLen]
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: understanding the question, and getting the slice right with k
Specific Note: used gpt to understand the question. Super confused. But i got it. 
Key Learning/Reinforcement: Have to use ... notation when using Math.max
*/

//Alternative Solution Link: 
function longestConsec(strarr, k) {
		var longest = "";
		for(var i=0;k>0 && i<=strarr.length-k;i++){
			var tempArray = strarr.slice(i,i+k);
			var tempStr = tempArray.join("");
			if(tempStr.length > longest.length){
				longest = tempStr;
			}
		}
		return longest;
}
