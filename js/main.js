const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const pokemonListDiv = document.getElementById('pokemonListDiv');

// urls
const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon';
let next;
let previous;

// functions
async function getPokemonUrlList(url) {
  const response = await fetch(url);
  const data = await response.json();

  next = data.next;
  previous = data.previous;

  const urlList = data.results.map((result) => result.url);
  return urlList;
}

async function getPokemonData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displayPokemonList(url) {
  if (!url) return;

  const urlList = await getPokemonUrlList(url);
  const promiseList = urlList.map((url) => {
    return getPokemonData(url);
  });

  const promiseListResult = await Promise.allSettled(promiseList);
  console.log(promiseListResult);

  const pokemonCardList = promiseListResult.map((result) => {
    // if ((result.status = 'rejected')) return '';
    const { id, name, height, weight } = result.value;
    const card = getCard({ id, name, height, weight });
    return card;
  });

  pokemonListDiv.innerHTML = pokemonCardList.join('');
}

function getCard(data) {
  const { id, name, height, weight } = data;
  return `
  <div class="card">
    <img src="./no-image-icon.png" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">altura: ${height}</p>
      <p class="card-text">peso: ${weight}</p>
      <button onclick="handleClick(${id})" class="btn btn-primary">Ver habilidades</button>
    </div>
  </div>`;
}

// listeners
nextButton.addEventListener('click', () => {
  displayPokemonList(next);
});

prevButton.addEventListener('click', () => {
  displayPokemonList(previous);
});

// DOM Elements Callbacks
function handleClick(id) {
  console.log(id);
}

// start
displayPokemonList(pokemonEndpoint);
