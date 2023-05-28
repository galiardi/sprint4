function getModal(pokemon) {
  const abilities = pokemon.abilities.map(
    (obj) => `<p>${obj.ability.name}</p>`
  );

  return `
    <!-- Vertically centered scrollable modal -->
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <!-- Modal -->
      <div
        class="modal fade"
        id="abilitiesModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
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
          </div>
        </div>
      </div>
    </div>
  `;
}

export { getModal };
