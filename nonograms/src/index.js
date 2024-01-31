import "./sass/main.scss";

import setClues from "./scripts/setClues";
import setGameField from "./scripts/setGameField";
import { setCellsEventListeners } from "./scripts/cells";
import { getNonogram, setNonogram } from "./scripts/nonogram";
import { setHeader } from "./scripts/header";
import {
  setBackground,
  setAudioSection,
  setResetButton,
} from "./scripts/background";

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
  const audioSection = setAudioSection();
  const background = setBackground();
  const reset = setResetButton();
  const gameField = setGameField(size);

  main.append(header, audioSection, reset, background, gameField);

  document.body.append(main);
  /*
- выбор шаблона

- адаптив

- settimeout после первого щелчка по полю (не по подсказкам) + сообщение:
- saveGame & continueGame
	*/
}

setMainTemplate();
setLogic();

