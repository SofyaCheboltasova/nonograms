const answers = [];
const puzzleCopy = [];
let size;

export function resetAnswers() {
  for (let i = 0; i < puzzleCopy.length; i += 1) {
    answers[i] = puzzleCopy[i];
  }
}

export function initAnswersArray(puzzle) {
  size = puzzle.length;

  for (let i = 0; i < puzzle.length; i += 1) {
    for (let j = 0; j < puzzle[i].length; j += 1) {
      answers[i * puzzle.length + j] = puzzle[i][j];
      puzzleCopy[i * puzzle.length + j] = puzzle[i][j];
    }
  }
}

export function updateAnswersArray(value, coordinates) {
  const { i, j } = coordinates;
  answers[i * size + j] = value;
}

export function isSolved() {
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] !== 0) {
      return false;
    }
  }
  return true;
}

