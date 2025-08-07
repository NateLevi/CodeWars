function dashatize(num) {
  if (isNaN(num)) return '';
  
  let nums = String(Math.abs(num)).split('').map(Number);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      if (i === 0) {
        nums.splice(i + 1, 0, '-');
        i++;
      } else if (i === nums.length - 1) {
        nums.splice(i, 0, '-');
        i++; 
      } else {
        nums.splice(i, 0, '-');
        i++; 
        nums.splice(i + 1, 0, '-');
        i++;
      }
    }
  }

  return nums.join('').replace(/--+/g, '-').replace(/^-|-$/g, '');
}
