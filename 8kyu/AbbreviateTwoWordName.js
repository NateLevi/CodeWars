/*
Description:
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
*/
function abbrevName(name){
    let seperate = name.split(' ');
    let initals = seperate.map((x) => x.slice(0,1).toUpperCase())
    return initals[0] + "." + initals[1]
}
