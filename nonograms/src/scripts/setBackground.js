export function setBackground() {
  const background = document.createElement("div");
  background.classList.add("background");

  return background;
}

export function setHeader() {
  const header = document.createElement("h1");
  header.classList.add("main__header");
  header.textContent = "Let's solve the nonogram!";

  return header;
}

export function setAudio() {
  const audioIcon = document.createElement("div");
  audioIcon.classList.add("main__audio_off");

  audioIcon.addEventListener("click", () => {
    if (audioIcon.classList.contains("main__audio_on")) {
      audioIcon.classList.remove("main__audio_on");
    } else {
      audioIcon.classList.add("main__audio_on");
    }
  });

  return audioIcon;
}

