function getCard(data, cardWidth = '') {
  const { id, name, height, weight, imgUrl } = data;
  return `
  <div class="card" style="width: ${cardWidth};">
    <img src=${imgUrl} class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">altura: ${height}</p>
      <p class="card-text">peso: ${weight}</p>
      <button onclick="handleClick(${id})" class="btn btn-primary">Ver estadísticas</button>
    </div>
  </div>`;
}

export { getCard };
