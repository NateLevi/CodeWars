// --- Codewars Link: https://www.codewars.com/kata/54dc6f5a224c26032800005c/solutions/javascript
// --- Title: Help the bookseller !
// --- Kyu: 6 kyu
// --- Date Solved: 9/28/25

// --- My Solution:
function stockList(books, categories) {
  
  if(books.length === 0){
    return ""
  }
  
  let bookObj = {};
  
  
  let newArr = books.filter(e => categories.includes(e[0]));
  

  for (let book of newArr) {
    let category = book[0]; 
    let qty = parseInt(book.match(/\d+/)[0]); 
    
    if (!bookObj[category]) {
      bookObj[category] = 0;
    }
    bookObj[category] += qty;
  }
  

  for (let cat of categories) {
    if (!bookObj[cat]) {
      bookObj[cat] = 0;
    }
  }
  

  return Object.entries(bookObj)
    .sort((a, b) => categories.indexOf(a[0]) - categories.indexOf(b[0]))
    .map(([k, v]) => `(${k} : ${v})`)
    .join(" - ");
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: 
Specific Note: Tricky kata, had to use gpt to help me but I understand the code overall, kata was just uneccesarily complicated
Key Learning/Reinforcement: using the ! to test if a key exists in the object, using object.entries to get the array of key value pairs.
*/

//Alternative Solution Link: 
