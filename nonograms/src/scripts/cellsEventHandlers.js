/* eslint-disable no-unused-expressions */

import { initAnswersArray, updateAnswersArray, isSolved } from "./checkAnswers";
import setEndMessage from "./setEndMessage";

let countClickedCells = 0;

function containsClass(cell, cClass) {
  return cell.classList.contains(cClass);
}

function comparePics(filled) {
  if (countClickedCells === filled && isSolved()) {
    setEndMessage(isSolved());
  }
}

function pressCell(cellData, puzzle, filled) {
  const { cell, i, j } = cellData;
  cell.classList.add("cell_pressed");
  countClickedCells += 1;

  if (containsClass(cell, "cell_crossed")) {
    cell.classList.remove("cell_crossed");
  }

  if (puzzle[i][j] === 1) {
    updateAnswersArray(0, { i, j });
  }

  comparePics(filled);
}

function unpressCell(cellData, puzzle, filled) {
  const { cell, i, j } = cellData;

  cell.classList.remove("cell_pressed");
  countClickedCells -= 1;

  updateAnswersArray(puzzle[i][j], { i, j });
  comparePics(filled);
}

function setCross(cellData, puzzle, filled) {
  const { cell } = cellData;
  cell.classList.add("cell_crossed");

  if (containsClass(cell, "cell_pressed") && countClickedCells > 0) {
    unpressCell(cellData, puzzle, filled);
  }
}

function setCellsEventListeners(size, nonogram) {
  const { puzzle, filled } = nonogram;
  const cells = document.querySelectorAll(".cell");

  initAnswersArray(puzzle);

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const cell = cells[i * size + j];

      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setCross({ cell, i, j }, puzzle, filled);
        return false;
      });

      cell.addEventListener("click", (e) => {
        e.button === 0 && containsClass(cell, "cell_pressed")
          ? unpressCell({ cell, i, j }, puzzle, filled)
          : pressCell({ cell, i, j }, puzzle, filled);
      });
    }
  }
}

export default setCellsEventListeners;

