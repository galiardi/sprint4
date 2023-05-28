import { getModal } from './getModal.js';

function showAbilities(id, dataObj) {
  const modalDiv = document.getElementById('modalDiv');
  const abilitiesModal = new bootstrap.Modal('#abilitiesModal');

  const pokemon = dataObj.pokemonListById[id];
  const modal = getModal(pokemon);

  modalDiv.innerHTML = modal;
  abilitiesModal.show();
  console.log(dataObj.pokemonListById[id].abilities);
}

export { showAbilities };
