const selectPokemon1Button = document.getElementById('selectPokemon1Button');
const selectPokemon2Button = document.getElementById('selectPokemon2Button');
const searchForm = document.getElementById('searchForm');
const healthBarCanvas = document.getElementById('healthBarCanvas');

selectPokemon1Button.addEventListener('click', () => handleSelectPokemon(1));
selectPokemon2Button.addEventListener('click', () => handleSelectPokemon(2));
searchForm.addEventListener('submit', handleSearch);

// listeners
function handleSelectPokemon(num) {
  const selectPokemonModal = new bootstrap.Modal('#selectPokemonModal'); // para manipular el modal de bootstrap con js
  selectPokemonModal.show();
}

async function handleSearch(e) {
  e.preventDefault();
  const searchName = searchInput.value.trim().toLowerCase();

  if (searchName === '') return;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchName}`
    );
    const data = await response.json();
    console.log(data);
    // pokemon = new Pokemon(data);

    // const card = getCard(pokemon, '25rem');

    // cardDiv.innerHTML = card;
  } catch (error) {
    console.log(err);
  }
}
