async function fetchRequest() {
  const request = await fetch("/assets/nonograms/5x5.json");
  const nonograms = await request.json();
  return nonograms;
}

// model
function getRandomNonogramKey(length) {
  const randomKey = Math.floor(Math.random() * length);
  return randomKey;
}

// model
function saveLastNonogram() {
  const savedNonogram = JSON.parse(localStorage.getItem("nonogram"));
  const savedName = JSON.parse(localStorage.getItem("nonogramName"));

  localStorage.setItem("savedNonogram", JSON.stringify(savedNonogram));
  localStorage.setItem("savedNonogramName", JSON.stringify(savedName));
}

// model
function setSavedNonogram() {
  const savedNonogram = JSON.parse(localStorage.getItem("savedNonogram"));
  const savedName = JSON.parse(localStorage.getItem("savedNonogramName"));
  localStorage.setItem("nonogram", JSON.stringify(savedNonogram));
  localStorage.setItem("nonogramName", JSON.stringify(savedName));
}

// controller
async function getRandomNonogram() {
  const nonograms = await fetchRequest();
  const nonogramValues = Object.values(nonograms);
  const nonogramKeys = Object.keys(nonograms);

  const lastKey = localStorage.nonogramKey;
  let newKey = getRandomNonogramKey(nonogramValues.length);

  while (newKey === lastKey) {
    newKey = getRandomNonogramKey(nonogramValues.length);
  }

  localStorage.setItem("nonogramKey", JSON.stringify(newKey));
  localStorage.setItem("nonogramName", JSON.stringify(nonogramKeys[newKey]));

  return nonogramValues[newKey];
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

