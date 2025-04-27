function window(length, offset, list) {
  const arr = [];
  for (let i = 0; i <= list.length - length; i += offset) {
    arr.push(list.slice(i, i + length));
  }
  return arr;
}
