/* eslint-disable no-console */
import setBackground from "./scripts/setBackground";
import setGameField from "./scripts/setGameField";
import setClues from "./scripts/setClues";
import setCellsEventListeners from "./scripts/setCellsEventListeners";
import { getNonogram, setNonogram } from "./scripts/generateNonogram";
import "./sass/main.scss";

const size = 5;

async function setMainScreen() {
  const background = setBackground();
  const gameField = setGameField(5);
  const main = document.createElement("main");
  main.classList.add("main");

  main.append(background, gameField);

  const { body } = document;
  body.append(main);
  /*
	setBackground(); +
	setGameField(); +
	generateNonogram(); +
	setCellsEventListeners() +

	setClues();

	setGameButtons();
	setTimer();
	*/
}

setMainScreen();
await setNonogram();
const nonogram = getNonogram();
setClues(nonogram);
setCellsEventListeners(size, nonogram);

