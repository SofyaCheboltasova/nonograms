function setEndMessage(isWinner) {
  const header = document.querySelector(".main__header");
  if (isWinner) {
    header.innerText = "Congrats! You're a winner!";
  } else {
    header.innerText = "Next time it will be better :(";
  }
  header.classList.add("main__header_win");
}

export default setEndMessage;
