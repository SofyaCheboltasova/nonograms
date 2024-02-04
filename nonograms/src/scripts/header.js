import { audio, setAudioOn } from "./audio";
import saveResult from "./scoreTable";

let timerId;

function startTimer() {
  const timer = document.querySelector(".header__timer");
  let min = 0;
  let sec = 0;

  timerId = setInterval(() => {
    sec += 1;
    if (sec >= 60) {
      min += 1;
      sec = 0;
    }

    const fmin = min >= 10 ? min : `0${min}`;
    const fsec = sec >= 10 ? sec : `0${sec}`;
    timer.innerText = `${fmin}:${fsec}`;
  }, 1000);
}

function isTimerStarted() {
  if (!timerId) {
    startTimer();
  }
}

function resetHeader() {
  if (timerId) clearInterval(timerId);
  timerId = undefined;

  const header = document.querySelector(".main__header");
  const timer = document.querySelector(".header__timer");
  const text = document.querySelector(".header__text");

  timer.innerText = "00:00";
  text.innerText = "Let's solve the nonogram!";
  header.classList.remove("main__header_win");
}

function setHeader() {
  const header = document.createElement("div");
  const text = document.createElement("h1");
  const timer = document.createElement("h1");

  header.classList.add("main__header");
  text.classList.add("header__text");
  timer.classList.add("header__timer");

  timer.innerText = "00:00";
  text.innerText = "Let's solve the nonogram!";

  header.append(text, timer);
  return header;
}

function setEndMessage() {
  const header = document.querySelector(".main__header");
  const text = document.querySelector(".header__text");

  text.innerText = "Congrats! You're a winner!";
  header.classList.add("main__header_win");

  saveResult();
  clearInterval(timerId);
  setAudioOn(audio.win.class);
}

export { setEndMessage, setHeader, isTimerStarted, resetHeader };

