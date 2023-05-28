import { getModal } from './getModal.js';

function showAbilities(id, dataObj) {
  const modalDiv = document.getElementById('modalDiv');

  const pokemon = dataObj.pokemonListById[id];
  const modal = getModal(pokemon);
  modalDiv.innerHTML = modal;

  const abilitiesModal = new bootstrap.Modal('#abilitiesModal'); // para manipular el modal de bootstrap desde js
  abilitiesModal.show();
}

export { showAbilities };
