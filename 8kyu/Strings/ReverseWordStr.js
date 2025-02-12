/*
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
*/
const reverse = string => string.split(' ').reverse().join(' ')
/*
P: Two strings with a space in between
R: reverse of the two strings
E: Hello World -> World Hello
*/
