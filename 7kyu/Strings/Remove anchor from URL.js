function removeUrlAnchor(url) {
  const arr = url.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#') {
      arr.splice(i);
      break;
    }
  }
  return arr.join('');
}
/*
P: string of a url
R: string of url with anything after # removed
E: "www.codewars.com#about" --> "www.codewars.com"
*/
