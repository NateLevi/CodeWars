function reverseWords(str) {
  let arr = str.split(' ')
  let empty = []
  for(let i=0; i<arr.length;i++){
    empty.push([arr[i]])
  }
  const newArr = empty.map(element => element[0].split('').reverse().join(''));
  return newArr.join(' ')
}
/*
P: String parameter
R: str reversed, all spaces should be retained
E: "Hello World!" -> "!dlroW olleH"
*/
