/*
P: array of tail,body,head
R: same array but head,body,tail
E; ["tail","body","head"]->["head","body","tail"]
*/
//1
const fixTheMeerkat = (arr) => arr.reverse()
//2
const fixTheMeerkat = arr => [arr[2],arr[1],arr[0]]
