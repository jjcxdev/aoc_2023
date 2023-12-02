// SOLUTION TO DAY 1 PART 1
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
