function averageLength(array) {
  const total = array.reduce((acc, str) => acc + str.length, 0);
  const avg = Math.round(total / array.length);
  
  return array.map(str => {
    if (str.length === avg) {
      return str; 
    } else if (str.length > avg) {
      return str.slice(0, avg);
    } else {
      const needed = avg - str.length;
      return str + str[str.length - 1].repeat(needed);
    }
  });
}
