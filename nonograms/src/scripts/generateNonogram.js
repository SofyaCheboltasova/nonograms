let nonogram;

async function fetchRequest() {
  const request = await fetch("/assets/nonograms/5x5.json");
  const nonograms = await request.json();
  return Object.values(nonograms);
}

async function getRandomNonogramKey() {
  const nonograms = await fetchRequest();

  const randomIndex = Math.floor(Math.random() * nonograms.length);
  return nonograms[randomIndex];
}

export async function setNonogram() {
  const randomNonogram = await getRandomNonogramKey();
  nonogram = randomNonogram;
}

export function getNonogram() {
  return nonogram;
}

