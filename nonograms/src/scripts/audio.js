export function setBackgroundAudio() {
  const audioTag = document.createElement("audio");
  audioTag.loop = true;

  const sourceTag = document.createElement("source");
  sourceTag.src = "./assets/audio/background-audio.mp3";
  sourceTag.type = "audio/mp3";

  audioTag.appendChild(sourceTag);
  return audioTag;
}

export function setAudioOff() {
  const sounds = document.getElementsByTagName("audio");
  for (let i = 0; i < sounds.length; i += 1) {
    sounds[i].pause();
  }
}

export function setAudioOn() {
  const sounds = document.getElementsByTagName("audio");
  for (let i = 0; i < sounds.length; i += 1) {
    sounds[i].play();
  }
}

