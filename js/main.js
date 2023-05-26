const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

// urls
const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon';
let next;
let previous;

// functions
async function getPokemonList(url) {
  if (!url) return [];

  const response = await fetch(url);
  const data = await response.json();

  next = data.next;
  previous = data.previous;

  return data.results;
}

async function displayPokemonList(url) {
  const pokemonList = await getPokemonList(url);
  console.log(pokemonList);
}

// listeners
nextButton.addEventListener('click', () => {
  displayPokemonList(next);
});

prevButton.addEventListener('click', () => {
  displayPokemonList(previous);
});

// start
getPokemonList(pokemonEndpoint);
