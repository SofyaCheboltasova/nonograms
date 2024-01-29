import setBackground from "./scripts/setBackground";
import "./sass/main.scss";

function setMainScreen() {
  const background = setBackground();
  const main = document.createElement("main");
  main.append(background);

  const { body } = document;
  body.append(main);
  /*
	setBackground();
	setGameButtons();
	setTimer();
	setGameImage();
	setGameField();
	*/
}

setMainScreen();

