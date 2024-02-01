/* eslint-disable no-console */
import {
  resetAnswers,
  saveAnswers,
  restoreSavedField,
  initAnswersArray,
} from "./answers";
import {
  resetCellStyles,
  resetClickedCells,
  clickedCellsCount,
  updateCountClickedCells,
} from "./cells";
import { setNonogram } from "./nonogram";
import setClues from "./setClues";
import { resetHeader } from "./header";

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
    saveAnswers(clickedClasses);
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
    restoreSavedField(clickedClasses);
    updateCountClickedCells();
  });
}

function setNewGameHandlers(button) {
  button.addEventListener("click", async () => {
    resetCellStyles();
    resetClickedCells();
    resetHeader();

    await setNonogram();
    initAnswersArray();
    setClues();
  });
}

export {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
  setNewGameHandlers,
};

