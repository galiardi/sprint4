import { mainFunction } from './functions/mainFunction.js';

// html elements
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const pokemonListDiv = document.getElementById('pokemonListDiv');

// url
const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon';

// data
const appData = {
  next: '',
  prev: '',
  pokemonList: [],
  pokemonListById: {},
};

// listeners
nextButton.addEventListener('click', () => {
  mainFunction(appData.next, appData, pokemonListDiv);
});

prevButton.addEventListener('click', () => {
  mainFunction(appData.prev, appData, pokemonListDiv);
});

// DOM Elements Callbacks
function handleClick(id) {
  console.log(id);
}

// start
mainFunction(pokemonEndpoint, appData, pokemonListDiv);
