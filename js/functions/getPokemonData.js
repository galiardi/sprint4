async function getPokemonData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export { getPokemonData };
