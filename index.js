// const csv = `
// code,name,attr1,attr2,attr3,attr4
// 1,item-1,A,1,B,1
// ,,,2,,2
// ,,,3,,
// 2,item-2,C,2,X,4
// ,,,5,,6
// ,,,,,34
// ,,,,,1
// 3,item-3,D,3,R,12
// 4,item-4,T,6,X,12
// ,,,3,,
// ,,,45,,
// ,,,8,,
// ,,,9,,
// 5,item-5,V,,F,4
// ,,,,,8
// 6,item-6,W,45,C,
// `.trim();

const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, 'data.csv');
const csv = fs.readFileSync(csvPath, 'utf8').trim();

function parseCSVToDict(csv) {
  const lines = csv.split('\n');
  const result = {};
  let currentCode = null;

  for (let i = 1; i < lines.length; i++) {
    const [code, name, attr1, attr2, attr3, attr4] = lines[i].split(',');
    if (code) {
      currentCode = code;
      result[currentCode] = {
        name,
        attr1,
        attr2: attr2 ? [Number(attr2)] : [],
        attr3,
        attr4: attr4 ? [Number(attr4)] : []
      };
    } else if (currentCode) {
      if (attr2) result[currentCode].attr2.push(Number(attr2));
      if (attr4) result[currentCode].attr4.push(Number(attr4));
    }
  }
  return result;
}

const output = parseCSVToDict(csv);
console.log(JSON.stringify(output, null, 2));
