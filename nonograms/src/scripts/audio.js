import audio from "./constants";

let volumeOn = false;

/*
	|| AUDIO LOGIC
*/
function setAudioOff() {
  const sounds = document.getElementsByTagName("audio");
  for (let i = 0; i < sounds.length; i += 1) {
    sounds[i].pause();
    volumeOn = false;
  }
}

function setAudioOn(audioClass) {
  const sound = document.querySelector(`.${audioClass}`);

  if (audio.background.class === audioClass) {
    volumeOn = true;
  }
  if (volumeOn) {
    sound.play();
  }
}

function switchAudio(section) {
  section.addEventListener("click", () => {
    if (section.classList.contains("main__audio_on")) {
      section.classList.remove("main__audio_on");
      setAudioOff();
    } else {
      section.classList.add("main__audio_on");
      setAudioOn(audio.background.class);
    }
  });
}

/*
	|| AUDIO TEMPLATE
*/
function createAudioTag(src, className, loop) {
  const audioTag = document.createElement("audio");
  audioTag.classList.add(className);
  audioTag.loop = loop;

  const sourceTag = document.createElement("source");
  sourceTag.src = `./assets/audio/${src}`;
  sourceTag.type = "audio/mp3";

  audioTag.appendChild(sourceTag);
  return audioTag;
}

function setAudioTags() {
  const section = document.createElement("div");
  const keys = Object.keys(audio);

  keys.forEach((key) => {
    const tag = createAudioTag(
      audio[key].src,
      audio[key].class,
      audio[key].loop
    );
    section.appendChild(tag);
  });
  return section;
}

export { audio, setAudioOn, setAudioOff, setAudioTags, switchAudio };

