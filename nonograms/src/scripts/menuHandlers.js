/* eslint-disable no-console */
import {
  resetAnswers,
  saveClickedCells,
  saveAnswers,
  restoreSavedField,
  initAnswersArray,
  restoreAnswers,
} from "./answers";
import {
  resetCellStyles,
  resetClickedCells,
  clickedCellsCount,
  updateCountClickedCells,
} from "./cells";
import { showHideMenu, setTemplatesButtons } from "./templates";
import { setNonogram, saveLastNonogram, setSavedNonogram } from "./nonogram";
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
    resetCellStyles();
    resetClickedCells();
    resetHeader();

    await setNonogram();
    initAnswersArray();
    setClues();
  });
}

function setTemplatesHandlers(button) {
  setTemplatesButtons();

  button.addEventListener("click", () => {
    console.error("lalala");
    showHideMenu();
  });
}

export {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
  setNewGameHandlers,
  setTemplatesHandlers,
};

