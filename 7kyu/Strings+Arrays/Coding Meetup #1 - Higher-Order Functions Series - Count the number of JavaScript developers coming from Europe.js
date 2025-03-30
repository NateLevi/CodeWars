function countDevelopers(list) {
  let arr = []
  for ( let i = 0 ; i < list.length; i++){
    arr.push(Object.values(list[i]))
  }
  const continents = arr.filter((e,i)=> e[5] === 'JavaScript').map( e => e[3] )
   return continents.reduce((acc, curr) => curr === "Europe" ? acc + 1 : acc, 0);
}
/*
P: array of objects
R: number of developer coming from Europe
E: [{firstName: "Bob", country:'Switzerland'}] -> 1
P: Loop through array of objects,
*/
