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
import { resetHeader, saveTimer, restoreTimer } from "./header";
import resetGame from "./resetGame";
import { fillTable } from "./scoreTableModal";

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
    saveTimer();
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
    restoreTimer();
  });
}

function setRandomHandlers(button) {
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
}

function setScoreHandlers(button) {
  button.addEventListener("click", () => {
    const window = document.querySelector(".modal__window");
    const modal = document.querySelector(".modal");
    modal.classList.add("modal_open");
    fillTable(window);

    const field = document.querySelector(".gameField");
    field.classList.add("gameField_closed");
  });
}

export {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
  setTemplatesHandlers,
  setSolutionHandlers,
  setRandomHandlers,
  setScoreHandlers,
};
