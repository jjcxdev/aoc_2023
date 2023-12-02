// DAY 1 PART 1
function totalSumOfConcatenatedDigits(coordinates) {
  let totalSum = 0;
  
  coordinates.forEach(coord => {
    const digits = coord.match(/\d/g);
    
    if (!digits || digits.length === 0) return;
    
    const twoDigitNumber = digits.length === 1 ? parseInt(digits[0] + digits[0]) : parseInt(digits[0] + digits[digits.length - 1]);
    
    totalSum += twoDigitNumber;
  });
  
  return totalSum;
}

// DAY 1 PART 2
const wordMap = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

const wordMapReverse = {
  'orez': 0,
  'eno': 1,
  'owt': 2,
  'eerht': 3,
  'ruof': 4,
  'evif': 5,
  'xis': 6,
  'neves': 7,
  'thgie': 8,
  'enin': 9,
};

function extractNumbers(coords, wordMap, wordMapReverse) {
  
  function findFirstNumber(s, reverse = false) {
    let firstNumIndex = s.length;
    let firstNumValue = null;
    const mapToUse = reverse ? wordMapReverse : wordMap;

    for (const [word, num] of Object.entries(mapToUse)) {
      const index = s.indexOf(word);
      if (index !== -1 && index < firstNumIndex) {
        firstNumIndex = index;
        firstNumValue = num;
      }
    }
    
    for (let i = 0; i < s.length; i++) {
      if (!isNaN(s[i]) && i < firstNumIndex) {
        firstNumIndex = i;
        firstNumValue = parseInt(s[i], 10);
        break;
      }
    }
    
    return firstNumValue;
    
  }
  
  const results = [];
  
  for (const coord of coords) {
    const first = findFirstNumber(coord);
    const last = findFirstNumber([...coord].reverse().join(''), true);
    
    if (first !== null && last !== null) {
      results.push([first, last]);
    }
  }
  
  return results;
}

const extractedNumbers = extractNumbers(coords, wordMap, wordMapReverse);
console.log(extractedNumbers);

const concatenatedPairs = extractedNumbers.map(pair => pair.join(''));
const totalSum = concatenatedPairs.reduce((sum, pairStr) => sum + parseInt(pairStr, 10), 0);

console.log(concatenatedPairs);
console.log(totalSum);
