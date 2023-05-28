function getModal(pokemon) {
  const abilities = pokemon.abilities.map(
    (obj) => `<p>${obj.ability.name}</p>`
  );

  return `
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">
        Habilidades de ${pokemon.name}
      </h1>
    </div>
    <div class="modal-body">${abilities.join('')}</div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
    </div>
  `;
}

export { getModal };
