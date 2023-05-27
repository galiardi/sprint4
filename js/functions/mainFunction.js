import { displayPokemonList } from './displayPokemonList.js';
import { setData } from './setData.js';

async function mainFunction(url, data, htmlElementToDisplay) {
  await setData(url, data);
  console.log(data);
  displayPokemonList(data.pokemonList, htmlElementToDisplay);
}

export { mainFunction };
