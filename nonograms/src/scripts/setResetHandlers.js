import { resetAnswers } from "./checkAnswers";
import { resetClickedCells } from "./cellsEventHandlers";
import setEndMessage from "./setEndMessage";

function resetCellStyles() {
  const pressed = document.querySelectorAll(".cell_pressed");
  const crossed = document.querySelectorAll(".cell_crossed");

  for (let i = 0; i < pressed.length; i += 1) {
    pressed[i].classList.remove("cell_pressed");
  }

  for (let i = 0; i < crossed.length; i += 1) {
    pressed[i].classList.remove("cell_crossed");
  }
}

function setResetHandlers(button) {
  button.addEventListener("click", () => {
    resetCellStyles();
    resetAnswers();
    resetClickedCells();
    setEndMessage(false);
  });
}

export default setResetHandlers;

