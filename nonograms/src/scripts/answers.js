const answers = [];
const puzzleCopy = [];
let size;

function saveCoordsInLocalSt(clickedClass) {
  const clicked = document.querySelectorAll(`.${clickedClass}`);
  const clickedCoords = [];

  clicked.forEach((cell) => clickedCoords.push(cell.dataset));
  localStorage.setItem(`${clickedClass}`, JSON.stringify(clickedCoords));
}

function saveAnswers(clickedClasses) {
  for (let i = 0; i < clickedClasses.length; i += 1) {
    saveCoordsInLocalSt(clickedClasses[i]);
  }
}

function restoreSavedCells(clickedClass) {
  const cells = document.querySelectorAll(".cell");
  const clickedCoords = JSON.parse(localStorage.getItem(clickedClass));

  for (let i = 0; i < clickedCoords.length; i += 1) {
    const x = Number(clickedCoords[i].row);
    const y = Number(clickedCoords[i].col);

    cells[x * size + y].classList.add(clickedClass);
  }
}

function restoreSavedField(clickedClasses) {
  for (let i = 0; i < clickedClasses.length; i += 1) {
    restoreSavedCells(clickedClasses[i]);
  }
}

function resetAnswers() {
  for (let i = 0; i < puzzleCopy.length; i += 1) {
    answers[i] = puzzleCopy[i];
  }
}

function initAnswersArray(puzzle) {
  size = puzzle.length;

  for (let i = 0; i < puzzle.length; i += 1) {
    for (let j = 0; j < puzzle[i].length; j += 1) {
      answers[i * puzzle.length + j] = puzzle[i][j];
      puzzleCopy[i * puzzle.length + j] = puzzle[i][j];
    }
  }
}

function updateAnswersArray(value, coordinates) {
  const { i, j } = coordinates;
  answers[i * size + j] = value;
}

function isSolved() {
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] !== 0) {
      return false;
    }
  }
  return true;
}

export {
  isSolved,
  updateAnswersArray,
  initAnswersArray,
  resetAnswers,
  saveAnswers,
  restoreSavedField,
};

