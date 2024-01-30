import setBackground from "./scripts/setBackground";
import setGameField from "./scripts/setGameField";
import setCellsEventListeners from "./scripts/setCellsEventListeners";
import generateNonogram from "./scripts/generateNonogram";
import "./sass/main.scss";

function setMainScreen() {
  const background = setBackground();
  const gameField = setGameField(5);
  const main = document.createElement("main");
  main.classList.add("main");

  main.append(background, gameField);

  const { body } = document;
  body.append(main);
  /*
	setBackground(); +
	setGameButtons();
	setTimer();
	setGameField(); +
	generateNonogram();
	setCellsEventListeners() +
	*/
}

setMainScreen();
setCellsEventListeners();
generateNonogram();

