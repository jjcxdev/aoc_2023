//Day 2 Part 1

const maxColors = {
  'red': 12,
  'green': 13,
  'blue': 14,
  'red;': 12,
  'green;': 13,
  'blue;': 14,
}


function doesGameExceedMaxColors(game, maxColors) {
  const colorString = game.split(': ')[1];
  const colorComponents = colorString.split(/[,;]/).map(s => s.trim().split(' '));

  
  for (const [count, color] of colorComponents) {
    if (parseInt(count, 10) > (maxColors[color] || 0)) {
      return true;
    }
  }
  return false;
}

function getGamesNotExceedingMaxColors(games, maxColors) {
  let validGames = [];
  
  for (const game of games) {
    if (!doesGameExceedMaxColors(game, maxColors)) {
      const gameTitle = game.split(':')[0];
        validGames.push(gameTitle);
        }
  }
  return validGames;
}

const validGamesList = getGamesNotExceedingMaxColors(games, maxColors);

console.log(validGamesList);

function extractNumbersFromString(str) {
  return str.match(/\d+/g).join(' ');
}

function getNumbersFromValidGames(validGames) {
  let allNumbers = validGames.map(gameTitle => extractNumbersFromString(gameTitle));
  return allNumbers.join(' ');
}

const numbersString = getNumbersFromValidGames(validGamesList);
console.log(numbersString)

function sumNumbersInString(numbersString) {
  return numbersString.split(' ').reduce((sum, number) => sum + parseInt(number, 10), 0);
}

const numberString = getNumbersFromValidGames(validGamesList);
const totalSum = sumNumbersInString(numbersString);
console.log(totalSum);

//Day 2 Part 2
