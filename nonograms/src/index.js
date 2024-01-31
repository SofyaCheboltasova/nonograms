import "./sass/main.scss";

import setClues from "./scripts/setClues";
import setGameField from "./scripts/setGameField";
import setCellsEventListeners from "./scripts/cellsEventHandlers";
import { getNonogram, setNonogram } from "./scripts/generateNonogram";
import { setHeader, setBackground, setAudio } from "./scripts/setBackground";

const size = 5;

async function setLogic() {
  await setNonogram();
  const nonogram = getNonogram();

  setClues(nonogram);
  setCellsEventListeners(size, nonogram);
}

async function setMainTemplate() {
  const main = document.createElement("main");
  main.classList.add("main");

  const header = setHeader();
  const audioIcon = setAudio();
  const background = setBackground();
  const gameField = setGameField(size);

  main.append(header, audioIcon, background, gameField);

  document.body.append(main);
  /*
- выбор шаблона

- адаптив

- reset game

- settimeout после первого щелчка по полю (не по подсказкам) + сообщение:

- sound (вкл./выкл.)

- saveGame & continueGame
	*/
}

setMainTemplate();
setLogic();

