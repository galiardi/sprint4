import { Pokemon } from './classes/Pokemon.js';
import { getCard } from './functions/getCard.js';
import { getModal } from './functions/getModal.js';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const cardDiv = document.getElementById('cardDiv');
const modalDiv = document.getElementById('modalDiv');

let pokemon;

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchName = searchInput.value.trim().toLowerCase();

  if (searchName === '') return;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchName}`
    );
    const data = await response.json();

    pokemon = new Pokemon(data);
    const { id, name, height, weight, imgUrl } = pokemon;

    const card = getCard({
      id,
      name,
      height,
      weight,
      imgUrl,
    });

    cardDiv.innerHTML = card;
  } catch (error) {
    console.log(err);
  }
});

window.handleClick = function () {
  const modal = getModal(pokemon);
  modalDiv.innerHTML = modal;
  const abilitiesModal = new bootstrap.Modal('#abilitiesModal'); // para manipular el modal de bootstrap con js
  abilitiesModal.show();
};
