import { getCard } from './getCard.js';

async function render(data, htmlElement) {
  console.log(data);
  const prevButton = document.getElementById('prevButton');
  if (data.prevUrl === null) {
    console.log(prevButton);
  }
  const pokemonCardList = data.pokemonList.map((pokemon) => {
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
