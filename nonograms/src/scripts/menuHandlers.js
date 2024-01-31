/* eslint-disable no-console */
import { resetAnswers, saveAnswers, restoreSavedField } from "./answers";
import {
  resetCellStyles,
  resetClickedCells,
  clickedCellsCount,
  updateCountClickedCells,
} from "./cells";
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
    console.error(isLocalStorageFilled);

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

export { setResetHandlers, setSaveHandlers, setContinueHandlers };

