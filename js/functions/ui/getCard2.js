function getCard2(data, cardWidth = '', currentPlayer) {
  const { name, imgUrl, abilities, isAlive, health } = data;

  const colors = [
    'secondary',
    'info',
    'warning',
    'danger',
    'success',
    'primary',
  ];

  const abilitiesButtons = abilities.map(
    (ability, i) =>
      `<button onclick="handleAbilityButtonClick('${currentPlayer}')" class="btn btn-${colors[i]} abilityButton" >${ability.ability.name}</button>`
  );
  return `
  <div class="card text-bg-dark text-center" style="width: ${cardWidth};">
    <img src=${imgUrl} class="card-img-top" style="filter:${
    isAlive ? '' : 'grayscale(100%)'
  }" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <div class="d-flex flex-wrap justify-content-around mt-4" >
      ${abilitiesButtons.join('')}
      </div>
    </div>
    <div class="card-footer" >
      <div class="healthBarContainer">
        <div id="${currentPlayer}-healthBar" class="healthBar" style="width: ${health}%"></div>
      </div>
    </div>
  </div>`;
}

export { getCard2 };
