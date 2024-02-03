async function fetchRequest() {
  const request = await fetch("/assets/nonograms/5x5.json");
  const nonograms = await request.json();
  return Object.values(nonograms);
}

// model
function getRandomNonogramKey(length) {
  const randomKey = Math.floor(Math.random() * length);
  return randomKey;
}

// model
function saveLastNonogram() {
  const savedNonogram = JSON.parse(localStorage.getItem("nonogram"));
  localStorage.setItem("savedNonogram", JSON.stringify(savedNonogram));
}

// model
function setSavedNonogram() {
  const savedNonogram = JSON.parse(localStorage.getItem("savedNonogram"));
  localStorage.setItem("nonogram", JSON.stringify(savedNonogram));
}

// controller
async function getRandomNonogram() {
  const nonograms = await fetchRequest();
  const lastKey = localStorage.nonogramKey;
  let newKey = getRandomNonogramKey(nonograms.length);

  while (newKey === lastKey) {
    newKey = getRandomNonogramKey(nonograms.length);
  }
  localStorage.nonogramKey = newKey;
  return nonograms[newKey];
}

// controller
async function setNonogram() {
  const randomNonogram = await getRandomNonogram();
  localStorage.setItem("nonogram", JSON.stringify(randomNonogram));
}

// model
function getNonogram() {
  const nonogram = JSON.parse(localStorage.getItem("nonogram"));
  return nonogram;
}

export { setNonogram, getNonogram, saveLastNonogram, setSavedNonogram };

