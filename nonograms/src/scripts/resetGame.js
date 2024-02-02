import { resetCellStyles, resetClickedCells } from "./cells";
import setClues from "./setClues";
import { resetHeader } from "./header";
import { initAnswersArray } from "./answers";

function resetGame() {
  resetCellStyles();
  resetClickedCells();
  resetHeader();
  initAnswersArray();
  setClues();
}

export default resetGame;

