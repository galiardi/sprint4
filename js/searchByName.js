import { Pokemon } from './classes/Pokemon.js';
import { getCard } from './functions/ui/getCard.js';
import { getModal } from './functions/ui/getModal.js';
import { insertStatsChart } from './functions/ui/insertStatsChart.js';

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

    const card = getCard(pokemon, '25rem');

    cardDiv.innerHTML = card;
  } catch (error) {
    console.log(err);
  }
});

window.handleClick = function () {
  const modal = getModal(pokemon); // crea un modal de bootstrap con los datos pokemon
  modalDiv.innerHTML = modal;
  insertStatsChart('statsChart', pokemon); // crea e inserta un gráfico en el modal
  const statsModal = new bootstrap.Modal('#statsModal'); // para manipular el modal de bootstrap con js
  statsModal.show();
};
