/*
*/

function sayHello( name, city, state ) {
  let fullName = name.join (' ')
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

/*
P: array with one or more elements, a string, and another string
R: return a sentence containing the strings of what was passed in 
E: ['Bob','Johnson'], 'Tampa', 'Florida'
*/
