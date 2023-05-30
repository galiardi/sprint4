import { getModal } from './ui/getModal.js';
import { insertStatsChart } from './ui/insertStatsChart.js';

function showStats(id, dataObj) {
  const modalDiv = document.getElementById('modalDiv');

  const pokemon = dataObj.pokemonListById[id];
  const modal = getModal(pokemon); // crea un modal de bootstrap con los datos de pokemon
  modalDiv.innerHTML = modal;

  insertStatsChart('statsChart', pokemon); // inserta un grafico en el modal

  const statsModal = new bootstrap.Modal('#statsModal'); // para manipular el modal de bootstrap desde js
  statsModal.show();
}

export { showStats };
