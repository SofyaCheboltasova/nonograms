/* eslint-disable no-console */
import {
  resetAnswers,
  saveClickedCells,
  saveAnswers,
  restoreSavedField,
  restoreAnswers,
  setSolution,
} from "./answers";
import {
  resetCellStyles,
  resetClickedCells,
  clickedCellsCount,
  updateCountClickedCells,
  turnOffClick,
} from "./cells";
import { showHideMenu } from "./templates";
import { setNonogram, saveLastNonogram, setSavedNonogram } from "./nonogram";
import setClues from "./setClues";
import { resetHeader } from "./header";
import resetGame from "./resetGame";

const clickedClasses = ["cell_pressed", "cell_crossed"];

function setResetHandlers(button) {
  button.addEventListener("click", () => {
    resetCellStyles();
    resetAnswers();
    resetClickedCells();
    resetHeader();
  });
}

function setSaveHandlers(button) {
  button.addEventListener("click", () => {
    if (clickedCellsCount() === 0) return;
    saveClickedCells(clickedClasses);
    saveAnswers();
    saveLastNonogram();
  });
}

function isClassSaved(className) {
  return localStorage.getItem(className) !== null;
}

function checkLocalStorage() {
  let isLocalStorageFilled = false;
  for (let i = 0; i < clickedClasses.length; i += 1) {
    isLocalStorageFilled ||= isClassSaved(clickedClasses[i]);
  }
  return isLocalStorageFilled;
}

function setContinueHandlers(button) {
  button.addEventListener("click", () => {
    if (!checkLocalStorage()) return;

    resetCellStyles();
    restoreAnswers();
    restoreSavedField(clickedClasses);
    setSavedNonogram();
    setClues();
    updateCountClickedCells();
  });
}

function setNewGameHandlers(button) {
  button.addEventListener("click", async () => {
    await setNonogram();
    resetGame();
  });
}

function setTemplatesHandlers(button) {
  button.addEventListener("click", () => {
    showHideMenu();
  });
}

function setSolutionHandlers(button) {
  button.addEventListener("click", () => {
    setSolution();
    turnOffClick();
    resetAnswers();
    resetHeader();
  });

  /*
		поставить класс cell_pressed во все nonogram.puzzle
		поставить solved = true в cells
		поменять текст в хидере на Solution
	*/
}

export {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
  setNewGameHandlers,
  setTemplatesHandlers,
  setSolutionHandlers,
};

