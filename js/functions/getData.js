import { getPokemonUrlList } from './getPokemonUrlList.js';
import { getPokemonData } from './getPokemonData.js';

async function getData(url) {
  const { urlList, next, prev } = await getPokemonUrlList(url);

  // no espera por getPokemonData en cada iteracion, por lo cual promiseList almacena un arreglo de promesas
  const promiseList = urlList.map((pokemonUrl) => {
    return getPokemonData(pokemonUrl);
  });

  // espera que se resuelvan las promesas del arreglo en forma paralela
  const promiseListResult = await Promise.allSettled(promiseList);
  return { promiseListResult, next, prev };
}

export { getData };
