import { PlayerCharacter } from './classes/PlayerCharacter.js';
import { getCard2 } from './functions/ui/getCard2.js';

const selectPokemon1Button = document.getElementById('selectPokemon1Button');
const selectPokemon2Button = document.getElementById('selectPokemon2Button');
const selectPokemonModal = new bootstrap.Modal('#selectPokemonModal'); // para manipular el modal de bootstrap con js
const searchForm = document.getElementById('searchForm');
const cardDiv = document.getElementById('cardDiv');
const playerDiv1 = document.getElementById('playerDiv1');
const playerDiv2 = document.getElementById('playerDiv2');

let currentPlayer = undefined;

selectPokemon1Button.addEventListener('click', () => {
  currentPlayer = 1;
  selectPokemonModal.show();
});

selectPokemon2Button.addEventListener('click', () => {
  currentPlayer = 2;
  selectPokemonModal.show();
});

searchForm.addEventListener('submit', handleSearch);

// listeners

async function handleSearch(e) {
  e.preventDefault();
  const searchName = searchInput.value.trim().toLowerCase();

  if (searchName === '') return;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchName}`
    );
    const data = await response.json();
    const pokemon = new PlayerCharacter(data);
    console.log(pokemon);

    const card = getCard2(pokemon, '18rem');
    cardDiv.innerHTML = card;

    // Seleccionar
    const selectButton = document.getElementById(
      'selectPokemonModal-selectButton'
    );
    selectButton.addEventListener('click', () => {
      if (currentPlayer === 1) {
        playerDiv1.innerHTML = card;
      } else if (currentPlayer === 2) {
        playerDiv2.innerHTML = card;
      }
      selectPokemonModal.hide();
      cardDiv.innerHTML = '';
      searchInput.value = '';
    });
  } catch (err) {
    console.log(err);
  }
}
