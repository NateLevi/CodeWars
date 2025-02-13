/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

const remove = string => string[string.length - 1] === '!' ? string.slice (0,string.length-1) : string
/*
P: string with a ! at the end
R: string without !
E: "Hi!" -> "Hi"
*/
