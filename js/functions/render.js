import { getCard } from './getCard.js';

async function render(pokemonList, htmlElement) {
  const pokemonCardList = pokemonList.map((pokemon) => {
    // if ((result.status = 'rejected')) return '';
    const { id, name, height, weight, imgUrl } = pokemon;

    const card = getCard({
      id,
      name,
      height,
      weight,
      imgUrl,
    });
    return card;
  });
  htmlElement.innerHTML = pokemonCardList.join('');
}

export { render };
