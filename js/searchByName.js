import { Pokemon } from './classes/Pokemon.js';
import { getCard } from './functions/ui/getCard.js';
import { getModal } from './functions/ui/getModal.js';

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
  const modal = getModal(pokemon);
  modalDiv.innerHTML = modal;

  const labels = pokemon.stats.map((stat) => stat.name);
  const data = pokemon.stats.map((stat) => stat.value);

  const myChart = new Chart('statsChart', {
    type: 'polarArea',
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            '#d5def5',
            '#8594e4',
            '#6643b5',
            '#430f58',
            '#00aba9',
            '#2b5797',
            '#e8c3b9',
            '#1e7145',
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: `Estadísticas de ${pokemon.name}`,
      },
    },
  });

  const statsModal = new bootstrap.Modal('#statsModal'); // para manipular el modal de bootstrap con js
  statsModal.show();
};
