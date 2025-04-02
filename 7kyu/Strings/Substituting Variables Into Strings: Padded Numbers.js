function solution(value){
  const pad = "00000";
  const numPad = pad.split('');
  
  const num = String(value);
  
  if(num.length === 1){
    numPad.splice(4, 1, num);
  }
  else if(num.length === 2){
    numPad.splice(3, 2, num[0], num[1]);
  }
  else if(num.length === 3){
    numPad.splice(2, 3, num[0], num[1], num[2]);
  }
  else if(num.length === 4){
    numPad.splice(1, 4, num[0], num[1], num[2], num[3]);
  }
  else{
    numPad.splice(0, 5, num[0], num[1], num[2], num[3],num[4])
  }
  
  return `Value is ${numPad.join('')}`;
}

/*
P: number
R: "Value is (padded number)"
E: 2 -> "Value is "00002"
*/
