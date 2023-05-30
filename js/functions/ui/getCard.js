function getCard(data, cardWidth = '') {
  const { id, name, height, weight, imgUrl } = data;
  return `
  <div class="card" style="width: ${cardWidth};">
    <img src=${imgUrl} class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text m-0">altura: ${height}</p>
      <p class="card-text m-0">peso: ${weight}</p>
      <button onclick="handleClick(${id})" class="btn btn-primary mt-3">Ver estadísticas</button>
    </div>
  </div>`;
}

export { getCard };
