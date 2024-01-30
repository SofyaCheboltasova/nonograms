async function fetchRequest() {
  const nonograms = await fetch("/assets/nonograms/5x5.json");
  return nonograms.json();
}

function getRandomNonogramKey() {
  const nonograms = fetchRequest();

  const keys = Object.keys(nonograms);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

function generateNonogram() {
  const randomNonogram = getRandomNonogramKey();
  return randomNonogram;
}

export default generateNonogram;

