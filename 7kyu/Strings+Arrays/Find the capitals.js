var capitals = function (word) {
  let str = word.split('')
	let arr = []
  for (let i = 0; i < str.length;i++){
    if(str[i] === str[i].toUpperCase()){
      arr.push(i)
    }
}
  return arr
};
/*
P:string of only lowercase and upercase letters
R: return array of indexs of capital letters
E: "HeLLo"-> [0,2,3]
*/
