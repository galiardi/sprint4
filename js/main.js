import { App } from './classes/App.js';
import { getData } from './functions/getData.js';
import { setData } from './functions/setData.js';
import { render } from './functions/render.js';
import { showAbilities } from './functions/showAbilities.js';

// html elements
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const resetButton = document.getElementById('resetButton');
const pokemonListDiv = document.getElementById('pokemonListDiv');

// data
const app = new App('https://pokeapi.co/api/v2/pokemon');

// functions
async function mainFunction(url, dataObj, htmlElement) {
  if (!url) return;
  const data = await getData(url);
  await setData(data, dataObj);
  render(dataObj, htmlElement);
}

// listeners
nextButton.addEventListener('click', () => {
  mainFunction(app.nextUrl, app, pokemonListDiv);
});

prevButton.addEventListener('click', () => {
  mainFunction(app.prevUrl, app, pokemonListDiv);
});

resetButton.addEventListener('click', () => {
  mainFunction(app.url, app, pokemonListDiv);
});

window.handleClick = (id) => {
  showAbilities(id, app);
};

// start

mainFunction(app.url, app, pokemonListDiv);
