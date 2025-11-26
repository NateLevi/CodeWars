// --- Codewars Link: https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
// --- Title: Pete, the baker
// --- Kyu: 5 kyu
// --- Date Solved: 11/26/25

/*
P: recipe = object, available = object, 
R: return max num of cakes pete can bake (integer)
E: 
P: if value in available is more or equal to value in cakes then count and then return total count
put values for each in their own arrays, loop through comparing count how many cakes can be made and return it
*/

// --- My Solution:
function cakes(recipe, available) {
  let obj = {}
  for(let ingredient in recipe){
    if(!(ingredient in available)){
       return 0
    }
  }
  for(let ingredient in available){
    if(ingredient in recipe){
    obj[ingredient] = [recipe[ingredient],available[ingredient]]
    }
  }
  
  let recipeValues = Object.values(obj)
  let lowest = Infinity

  for(let i = 0; i < recipeValues.length;i++){
        
    let div = recipeValues[i][1]/recipeValues[i][0]
    
    if(div < lowest){
      lowest = div
    }
  }
  return Math.floor(lowest)
}
/*

// My Complexity:
O(n)
--- Reflection & Struggle ---

Primary Struggle Tag: test case and problem understanding
Specific Note: used gpt to understand question but coded myself
Key Learning/Reinforcement: ! in front of in a obj, Math.floor rounds to nearest whole number
*/

//Alternative Solution Link: 
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
