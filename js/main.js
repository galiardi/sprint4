// html elements
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const pokemonListDiv = document.getElementById('pokemonListDiv');

// url
const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon';

// data
const appData = {
  next: '',
  prev: '',
  pokemonList: [],
  pokemonListById: {},
};

// functions
async function getPokemonUrlList(url) {
  const response = await fetch(url);
  const data = await response.json();
  const urlList = data.results.map((result) => result.url);
  return { urlList, next: data.next, prev: data.previous };
}

async function getPokemonData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function setData(url, obj) {
  if (!url) return;

  const { urlList, next, prev } = await getPokemonUrlList(url, obj);

  const promiseList = urlList.map((pokemonUrl) => {
    return getPokemonData(pokemonUrl);
  });

  const promiseListResult = await Promise.allSettled(promiseList);
  console.log(promiseListResult);

  obj.pokemonList = promiseListResult.map((result) => {
    return new Pokemon(result.value);
  });

  obj.pokemonListById = obj.pokemonList.reduce(
    (acc, el) => ({ ...acc, [el.id]: el }),
    {}
  );

  obj.next = next;

  obj.prev = prev;
}

async function displayPokemonList() {
  console.log(appData);
  const pokemonCardList = appData.pokemonList.map((pokemon) => {
    // if ((result.status = 'rejected')) return '';
    const { id, name, height, weight, imgUrl } = pokemon;

    const card = getCard({
      id,
      name,
      height,
      weight,
      imgUrl,
    });
    return card;
  });
  pokemonListDiv.innerHTML = pokemonCardList.join('');
}

function getCard(data) {
  const { id, name, height, weight, imgUrl } = data;
  return `
  <div class="card">
    <img src=${imgUrl} class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">altura: ${height}</p>
      <p class="card-text">peso: ${weight}</p>
      <button onclick="handleClick(${id})" class="btn btn-primary">Ver habilidades</button>
    </div>
  </div>`;
}

// listeners
nextButton.addEventListener('click', async () => {
  await setData(appData.next, appData);
  displayPokemonList();
});

prevButton.addEventListener('click', async () => {
  await setData(appData.prev, appData);
  displayPokemonList();
});

// DOM Elements Callbacks
function handleClick(id) {
  console.log(id);
}

// classes
class Pokemon {
  #id;
  #name;
  #height;
  #weight;
  #imgUrl;
  #abilities;
  constructor({ id, name, height, weight, sprites, abilities }) {
    this.#id = id;
    this.#name = name;
    this.#height = height;
    this.#weight = weight;
    this.#imgUrl = sprites.front_default;
    this.#abilities = abilities;
  }
  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get height() {
    return this.#height;
  }
  get weight() {
    return this.#weight;
  }
  get imgUrl() {
    return this.#imgUrl;
  }
  get abilities() {
    return this.#abilities;
  }
}

// start
(async () => {
  await setData(pokemonEndpoint, appData);
  displayPokemonList();
})();
