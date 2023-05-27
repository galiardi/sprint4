import { Pokemon } from '../classes/pokemon.js';
import { getPokemonData } from './getPokemonData.js';
import { getPokemonUrlList } from './getPokemonUrlList.js';

async function setData(url, obj) {
  if (!url) return;

  const { urlList, next, prev } = await getPokemonUrlList(url, obj);

  const promiseList = urlList.map((pokemonUrl) => {
    return getPokemonData(pokemonUrl);
  });

  const promiseListResult = await Promise.allSettled(promiseList);

  obj.pokemonList = promiseListResult.map((result) => {
    return new Pokemon(result.value);
  });

  obj.pokemonListById = obj.pokemonList.reduce(
    (acc, el) => ({ ...acc, [el.id]: el }),
    {}
  );

  obj.next = next;

  obj.prev = prev;
}

export { setData };
