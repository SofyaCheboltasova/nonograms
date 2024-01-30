/* eslint-disable no-console */
import { setBackground, setHeader } from "./scripts/setBackground";
import setGameField from "./scripts/setGameField";
import setClues from "./scripts/setClues";
import setCellsEventListeners from "./scripts/cellsEventHandlers";
import { getNonogram, setNonogram } from "./scripts/generateNonogram";
import "./sass/main.scss";

const size = 5;

async function setMainScreen() {
  const main = document.createElement("main");
  main.classList.add("main");

  const header = setHeader();
  const background = setBackground();
  const gameField = setGameField(5);

  main.append(background, header, gameField);

  const { body } = document;
  body.append(main);
  /*
	модалку
	адаптив
	setGameButtons();
	setTimer();
	*/
}

setMainScreen();
await setNonogram();
const nonogram = getNonogram();
setClues(nonogram);
setCellsEventListeners(size, nonogram);

