let nonogram;

async function fetchRequest() {
  const request = await fetch("/assets/nonograms/5x5.json");
  const nonograms = await request.json();
  return Object.values(nonograms);
}

function getRandomNonogramKey(length) {
  const randomKey = Math.floor(Math.random() * length);
  return randomKey;
}

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

export async function setNonogram() {
  const randomNonogram = await getRandomNonogram();
  nonogram = randomNonogram;
}

export function getNonogram() {
  return nonogram;
}

