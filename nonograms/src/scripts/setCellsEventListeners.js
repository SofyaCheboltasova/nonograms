/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */

import { initAnswersArray, updateAnswersArray, isSolved } from "./checkAnswers";

let countClickedCells = 0;

function isCellPressed(cell) {
  return cell.classList.contains("cell_pressed");
}

function checkClickedCells(filled) {
  if (countClickedCells === filled && isSolved()) {
    alert("You win!");
  }
}

function pressCell(cellData, puzzle, filled) {
  const { cell, i: x, j: y } = cellData;

  cell.classList.add("cell_pressed");

  countClickedCells += 1;
  if (puzzle[x][y] === 1) {
    updateAnswersArray(0, { x, y });
  }

  checkClickedCells(filled);
}

function unpressCell(cellData, puzzle, filled) {
  const { cell, i: x, j: y } = cellData;
  cell.classList.remove("cell_pressed");

  countClickedCells -= 1;
  updateAnswersArray(puzzle[x][y], { x, y });
  checkClickedCells(filled);
}

function setCellsEventListeners(size, nonogram) {
  const { puzzle, filled } = nonogram;
  initAnswersArray(puzzle);
  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const cell = cells[i * size + j];

      cell.addEventListener("click", () => {
        isCellPressed(cell)
          ? unpressCell({ cell, i, j }, puzzle, filled)
          : pressCell({ cell, i, j }, puzzle, filled);
      });
    }
  }
}

export default setCellsEventListeners;

