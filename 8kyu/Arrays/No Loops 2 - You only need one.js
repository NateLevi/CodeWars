/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/
function check(a,x){
  return a.includes(x)
};

/*
P: array for a and value for x 
R: boolean true or false
E: ([66, 101], 66), true)
*/
