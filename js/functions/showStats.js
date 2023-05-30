import { getModal } from './ui/getModal.js';

function showStats(id, dataObj) {
  const modalDiv = document.getElementById('modalDiv');

  const pokemon = dataObj.pokemonListById[id];
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

  const statsModal = new bootstrap.Modal('#statsModal'); // para manipular el modal de bootstrap desde js
  statsModal.show();
}

export { showStats };
