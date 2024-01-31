/* eslint-disable no-unused-expressions */
import { initAnswersArray, updateAnswersArray, isSolved } from "./answers";
import { setAudioOn, audio } from "./audio";
import { isTimerStarted, setEndMessage } from "./header";

let countClickedCells = 0;
const pressed = "cell_pressed";
const crossed = "cell_crossed";
let solved = false;

function resetClickedCells() {
  countClickedCells = 0;
  solved = false;
}

function containsClass(cell, cClass) {
  return cell.classList.contains(cClass);
}

function editClass(cell, className, isAdd = true) {
  isAdd ? cell.classList.add(className) : cell.classList.remove(className);
}

function comparePics(filled) {
  if (countClickedCells === filled && isSolved()) {
    solved = true;
    setEndMessage();
  }
}

function pressCell(cellData, nonogram) {
  if (solved) return;

  const { cell, i, j } = cellData;
  const { puzzle, filled } = nonogram;
  countClickedCells += 1;

  editClass(cell, pressed);
  setAudioOn(audio.cellDark.class);

  if (containsClass(cell, crossed)) {
    editClass(cell, crossed, false);
  }

  if (puzzle[i][j] === 1) {
    updateAnswersArray(0, { i, j });
  }

  comparePics(filled);
}

function unpressCell(cellData, nonogram, audioClass = audio.cellLight.class) {
  if (solved) return;

  const { cell, i, j } = cellData;
  const { puzzle, filled } = nonogram;

  countClickedCells -= 1;

  editClass(cell, pressed, false);
  setAudioOn(audioClass);
  updateAnswersArray(puzzle[i][j], { i, j });
  comparePics(filled);
}

function setCross(cellData, nonogram) {
  if (solved) return;

  const { cell } = cellData;
  editClass(cell, crossed);

  if (containsClass(cell, pressed) && countClickedCells > 0) {
    unpressCell(cellData, nonogram, audio.cellCross.class);
  } else {
    setAudioOn(audio.cellCross.class);
  }
}

function setCellsEventListeners(size, nonogram) {
  initAnswersArray(nonogram.puzzle);

  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const cell = cells[i * size + j];
      const cellData = { cell, i, j };

      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        isTimerStarted();
        setCross(cellData, nonogram);
      });

      cell.addEventListener("click", (e) => {
        isTimerStarted();
        e.button === 0 && containsClass(cell, pressed)
          ? unpressCell(cellData, nonogram)
          : pressCell(cellData, nonogram);
      });
    }
  }
}

export { setCellsEventListeners, resetClickedCells };

