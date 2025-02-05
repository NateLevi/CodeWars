/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
*/

function mouthSize(animal) {
  //if condition is true return small, if false return wide
  return animal === 'alligator' ? 'small' : 'wide';
}

/*
P: type of animal is passed into animal parameter
R: string dependent on what string or animal is passed into as argument
E: passing in 'alligator' -> return 'small', any other argument return 'wide'
P: 
*/
