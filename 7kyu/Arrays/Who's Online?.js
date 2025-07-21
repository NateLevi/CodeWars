// --- Codewars Link: 
// --- Title: Who's Online?
// --- Kyu: 7 kyu
// --- Date Solved: 7/21/25

/*
P: array of objects w/ username,status,lastactivity
R: new object with an array as the values
E: 
P: loop through objects, get status and name
*/

// --- My Solution:
const whosOnline = (friends) => {
  let output = {
    online: [],
    offline: [],
    away: []
  }

  for (const obj of friends) {
    if (obj.status === 'online' && obj.lastActivity <= 10) {
      output.online.push(obj.username)
    } else if (obj.status === 'online' && obj.lastActivity > 10) {
      output.away.push(obj.username)
    } else {
      output.offline.push(obj.username)
    }
  }

  for (const key in output) {
    if (output[key].length === 0) {
      delete output[key];
    }
  }

  return output
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: How to loop through objects in an array, had it just had to add for in loop to loop
over the properties. Also didn't know how to delete an objects property/value.
Specific Note: took a bit of time to figure out, used gpt a little bit, but i did a majority on my own. 
Key Learning/Reinforcement: use for of to loop through objects and for in to loop over keys of an obj,
also learned about the delete word in js to delete a obj. 
*/

//Alternative Solution Link: 
const whosOnline = (friends) => {
    let output = {};
    friends.forEach(e => {
        let status = e.status;
        if(status === 'online' && e.lastActivity > 10) status = 'away';
        let temp = output[status];
        if(output[status]) {
            output[status].push(e.username);
        }
        else {
            output[status] = [e.username];
        }
    });
    return output;
}
