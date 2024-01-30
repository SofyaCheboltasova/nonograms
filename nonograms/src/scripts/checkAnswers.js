const answers = [];

export function initAnswersArray(puzzle) {
  for (let i = 0; i < puzzle.length; i += 1) {
    for (let j = 0; j < puzzle[i].length; j += 1) {
      answers[i * puzzle.length + j] = puzzle[i][j];
    }
  }
}

export function updateAnswersArray(value, size, coordinates) {
  const { x, y } = coordinates;
  answers[x * size + y] = value;
}

export function isSolved() {
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] !== 0) {
      return false;
    }
  }
  return true;
}

