// DAY 3 PART 1

function sumIntegersAdjacentToSymbols(gridString) {
  const grid = gridString.split('\n').map(row => row.split(''));
  const symbols = new Set (['$', '*', '/', '-', '#', '@', '&', '%', '=', '+']);
  
const adjacentOffsets = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    const foundIntegers = [];
    const foundIndicies = new Map();

    function findWholeNumber(y, x) {
        let number = '';
        let left = x;
        while (left >= 0 && !isNaN(grid[y][left]) && grid[y][left] !== '.') {
            number = grid[y][left] + number;
            left--;
        }
        let right = x + 1;
        while (right < grid[y].length && !isNaN(grid[y][right]) && grid[y][right] !== '.') {
            number += grid[y][right];
            right++;
        }
        return { number, index: left + 1 };
    }

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (!isNaN(grid[y][x]) && grid[y][x] !== '.') {
                let isAdjacentToSymbol = false;
                for (let offset of adjacentOffsets) {
                    const newY = y + offset[0];
                    const newX = x + offset[1];
                    if (newY >= 0 && newY < grid.length && newX >= 0 && newX < grid[newY].length) {
                        if (symbols.has(grid[newY][newX])) {
                            isAdjacentToSymbol = true;
                            break;
                        }
                    }
                }
                if (isAdjacentToSymbol) {
                    const { number, index } = findWholeNumber(y, x);
                    const key = `${y}, ${index}`;
                  if (!foundIndicies.has(key)) {
                    foundIntegers.push(number);
                    foundIndicies.set(key, true);
                  }
                }
            }
        }
    }

    const integersArray = foundIntegers.map(Number);
    return integersArray.reduce((sum, num) => sum + num, 0);
}

console.log(sumIntegersAdjacentToSymbols(gridString));
