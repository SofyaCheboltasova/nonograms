import { resetAnswers } from "./answers";
import { resetClickedCells } from "./cells";
import { resetHeader } from "./header";

function resetCellStyles() {
  const pressed = document.querySelectorAll(".cell_pressed");
  const crossed = document.querySelectorAll(".cell_crossed");

  for (let i = 0; i < pressed.length; i += 1) {
    pressed[i].classList.remove("cell_pressed");
  }

  for (let i = 0; i < crossed.length; i += 1) {
    crossed[i].classList.remove("cell_crossed");
  }
}

function setResetHandlers(button) {
  button.addEventListener("click", () => {
    resetCellStyles();
    resetAnswers();
    resetClickedCells();
    resetHeader();
  });
}

export default setResetHandlers;

