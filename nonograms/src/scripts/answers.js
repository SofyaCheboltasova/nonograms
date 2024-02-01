/* eslint-disable no-console */
const answers = [];
const puzzleCopy = [];
let size;

function saveCoordsInLocalSt(clickedClass) {
  const clicked = document.querySelectorAll(`.${clickedClass}`);
  const clickedCoords = [];

  clicked.forEach((cell) => clickedCoords.push(cell.dataset));
  localStorage.setItem(`${clickedClass}`, JSON.stringify(clickedCoords));
}

function saveClickedCells(clickedClasses) {
  for (let i = 0; i < clickedClasses.length; i += 1) {
    saveCoordsInLocalSt(clickedClasses[i]);
  }
}

function restoreAnswers() {
  const savedAnswers = JSON.parse(localStorage.getItem("savedAnswers"));

  for (let i = 0; i < savedAnswers.length; i += 1) {
    answers[i] = savedAnswers[i];
  }
}

function saveAnswers() {
  localStorage.setItem("savedAnswers", JSON.stringify(answers));
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

function initAnswersArray() {
  const nonogram = JSON.parse(localStorage.getItem("nonogram"));
  const { puzzle } = nonogram;
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
  console.error(answers);
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
  restoreAnswers,
  saveAnswers,
  saveClickedCells,
  restoreSavedField,
};

