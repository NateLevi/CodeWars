function myLanguages(results) {
  const sortedEntries = Object.entries(results).sort((a,b)=> b[1] - a[1])
  let arr = []
  for(let i=0 ;i < sortedEntries.length ; i++){
    if(sortedEntries[i][1] >= 60){
      arr.push(sortedEntries[i][0])
    }  
  }
  return arr
}
/*
P: object of languages with values
R: list of languages where test score is at least 60 in descending order
E: {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
P: Loop through object, if values are greater then 60 then display the property
*/
