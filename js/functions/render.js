import { getCard } from './ui/getCard.js';

async function render(dataObj, htmlElement) {
  // habilita/deshabilita los botones dependiendo si hay o no una url dsiponible
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  prevButton.disabled = dataObj.prevUrl === null;
  nextButton.disabled = dataObj.nextUrl === null;

  // muestra la lista de pokemones en pantalla
  const pokemonCardList = dataObj.pokemonList.map((pokemon) => {
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
