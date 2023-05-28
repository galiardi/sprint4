import { getModal } from './ui/getModal.js';

function showAbilities(id, dataObj) {
  const modalDiv = document.getElementById('modalDiv');

  const pokemon = dataObj.pokemonListById[id];
  const modal = getModal(pokemon);
  modalDiv.innerHTML = modal;

  const abilities = pokemon.abilities.map((obj) => obj.ability.name);

  const myChart = new Chart('abilitiesChart', {
    type: 'pie',
    data: {
      labels: abilities,
      datasets: [
        {
          data: abilities.map((ability) => Math.floor(100 / abilities.length)),
          backgroundColor: ['#00aba9', '#2b5797', '#e8c3b9', '#1e7145'],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: `Habilidades de ${pokemon.name}`,
      },
    },
  });

  const abilitiesModal = new bootstrap.Modal('#abilitiesModal'); // para manipular el modal de bootstrap desde js
  abilitiesModal.show();
}

export { showAbilities };
