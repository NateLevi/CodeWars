//Unsolved

function phone(strng, num) {
  const obj = {};
  const lines = strng.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const nameMatch = line.match(/<([^>]+)>/);
    const phoneMatch = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/);

    if (!nameMatch || !phoneMatch) continue;

    const name = nameMatch[1];
    const phone = phoneMatch[0];

    let address = line
      .replace(/<[^>]+>/, '')
      .replace(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/, '')
      .replace(/_/g, ' ')
      .replace(/[^a-zA-Z0-9\s\.,'\-]/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\s*,\s*,/g, ',')
      .replace(/\s*,\s*/g, ', ')
      .trim();

    obj[name] = { PhoneNumber: phone, Address: address };
  }

  let count = 0;
  let foundName = '';
  let foundAddress = '';

  for (let name in obj) {
    if (obj[name].PhoneNumber.replace('+', '') === num) {
      count++;
      foundName = name;
      foundAddress = obj[name].Address;
    }
  }

  if (count === 0) {
    return `Error => Not found: ${num}`;
  } else if (count > 1) {
    return `Error => Too many people: ${num}`;
  } else {
    return `Phone => ${num}, Name => ${foundName}, Address => ${foundAddress}`;
  }
}
