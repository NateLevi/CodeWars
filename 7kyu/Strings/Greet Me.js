/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
*/
function(name) {
  const lower = name.toLowerCase()
  const arr = lower.split('').map((x,y)=> y === 0 ? x.toUpperCase() : x)
  const result = arr.join('')
  return `Hello ${result}!`
};
/*
P: string of a name, can be uppercase or lowercase
R: "Hello {name}"
E: "Tommy"-> "Hello Tommy"
*/
