function accum(s) {
	let arr = s.split("")
  let newArr = arr.flatMap((element,index)=> element.repeat(index + 1).toUpperCase())
  let result = newArr.flatMap((element)=> element.length > 1 ? element[0] + element.slice(1).toLowerCase()
 : element)
  return result.join('-')
}
/*
P: a string of letters cap and non-cap
R: That string spread out, each index is duplicated and first letter is capped
E: "abc"-> "A-Bb-Ccc"
*/
