let answers;

export function initAnswersArray(puzzle) {
  answers = puzzle.slice();
}

export function updateAnswersArray(value, coordinates) {
  const { x, y } = coordinates;
  answers[x][y] = value;
}

export function isSolved() {
  for (let i = 0; i < answers.length; i += 1) {
    for (let j = 0; j < answers[i].length; j += 1) {
      if (answers[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

