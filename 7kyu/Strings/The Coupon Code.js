function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  const months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
  };

  let firstDate = currentDate.split(' ')[0];
  let secondDate = expirationDate.split(' ')[0];
  
  let firstNum = Number(currentDate.split(' ')[1].replace(',', ''));
  let secNum = Number(expirationDate.split(' ')[1].replace(',', ''));
  
  let firstYear = Number(currentDate.split(' ')[2]);
  let secondYear = Number(expirationDate.split(' ')[2]);
  
  if (enteredCode === correctCode) {
    if (firstYear < secondYear) {
      return true;
    }
    if (firstYear === secondYear) {
      if (months[firstDate] < months[secondDate]) {
        return true;
      }
      if (months[firstDate] === months[secondDate]) {
        if (firstNum <= secNum) {
          return true;
        }
      }
    }
  }

  return false;
}

//learned: logic and conditionals, i learned theres a date class in javascript and you can comapre with that. 
