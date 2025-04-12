var splitInParts = function(s, partLength) {
  let arr = [];

  for (let i = 0; i < s.length; i += partLength) {
    arr.push(s.slice(i, i + partLength));
  }

  return arr.join(' ');
};

/*
P: long string
R: strings broken up into parts based on partLength number
E: 'himynameisbob', 2-> 'hi my na me is bo b'
P: Loop through the string, if index is divisible by partLength then .push a " "
*/
