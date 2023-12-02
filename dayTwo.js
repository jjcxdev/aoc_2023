// DAY 2 PART 1

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

function extractNumbersFromString(str) {
  return str.match(/\d+/g).join(' ');
}

function getNumbersFromValidGames(validGames) {
  let allNumbers = validGames.map(gameTitle => extractNumbersFromString(gameTitle));
  return allNumbers.join(' ');
}

const numbersString = getNumbersFromValidGames(validGamesList);

function sumNumbersInString(numbersString) {
  return numbersString.split(' ').reduce((sum, number) => sum + parseInt(number, 10), 0);
}

const numberString = getNumbersFromValidGames(validGamesList);
const totalSum = sumNumbersInString(numbersString);
console.log(totalSum);

// DAY 2 PART 2
function getMaxColorCountsInGame(game) {
  const colorString = game.split(': ')[1];
  const colorComponents = colorString.split(/[,;]/).map(s => s.trim().split(' '));
  
  let maxCounts = {};
  
  for (const [count, color] of colorComponents) {
    if (!maxCounts[color]) {
      maxCounts[color] = 0;
    }
    maxCounts[color] = Math.max(maxCounts[color], parseInt(count, 10));
  }
  
  return maxCounts;
}

function getMaxCountsForEachGame(games) {
  let gameMaxCounts = {};
  
  for (const game of games) {
    const gameTitle = game.split(':')[0];
    gameMaxCounts[gameTitle] = getMaxColorCountsInGame(game);
  }
  
  return gameMaxCounts;
}

const gamesMaxColorCounts = getMaxCountsForEachGame(games);

function sumProductOfMaxColorCounts(gamesMaxColorCounts) {
  let totalSum = 0;
  
  for (const gameCounts of Object.values(gamesMaxColorCounts)) {
    const product = Object.values(gameCounts).reduce((prod, count) => prod * count, 1);
totalSum += product;
  }
  
  return totalSum;
}

const totalSum = sumProductOfMaxColorCounts(gamesMaxColorCounts);
console.log(totalSum);
