import { Pokemon } from '../classes/Pokemon.js';

async function setData(data, obj) {
  const { promiseListResult, next, prev } = data;

  obj.pokemonList = promiseListResult.map((result) => {
    return new Pokemon(result.value);
  });

  obj.nextUrl = next;

  obj.prevUrl = prev;
}

export { setData };
