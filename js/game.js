import { PlayerCharacter } from './classes/PlayerCharacter.js';
import { getCard2 } from './functions/ui/getCard2.js';

const selectPokemon1Button = document.getElementById('selectPokemon1Button');
const selectPokemon2Button = document.getElementById('selectPokemon2Button');
const selectPokemonModal = new bootstrap.Modal('#selectPokemonModal'); // para manipular el modal de bootstrap con js
const searchForm = document.getElementById('searchForm');
const cardDiv = document.getElementById('cardDiv');
const playerDiv1 = document.getElementById('playerDiv1');
const playerDiv2 = document.getElementById('playerDiv2');
const startButton = document.getElementById('startButton');

let gameIsRuning = false;
let currentPlayer = undefined;
let playerCharacters = {
  player1: {},
  player2: {},
};

selectPokemon1Button.addEventListener('click', () => {
  currentPlayer = 'player1';
  selectPokemonModal.show();
});

selectPokemon2Button.addEventListener('click', () => {
  currentPlayer = 'player2';
  selectPokemonModal.show();
});

searchForm.addEventListener('submit', handleSearch);

startButton.addEventListener('click', () => {
  gameIsRuning = !gameIsRuning;
  gameIsRuning
    ? (startButton.textContent = 'parar')
    : (startButton.textContent = 'iniciar');
});

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

    const card = getCard2(pokemon, '18rem', currentPlayer);
    cardDiv.innerHTML = card;

    // Seleccionar
    const selectButton = document.getElementById(
      'selectPokemonModal-selectButton'
    );
    selectButton.addEventListener('click', () => {
      if (currentPlayer === 'player1') {
        playerDiv1.innerHTML = card;
        playerCharacters.player1 = pokemon;
      } else if (currentPlayer === 'player2') {
        playerDiv2.innerHTML = card;
        playerCharacters.player2 = pokemon;
      }
      selectPokemonModal.hide();
      cardDiv.innerHTML = '';
      searchInput.value = '';
    });
  } catch (err) {
    console.log(err);
  }
}

window.handleAbilityButtonClick = (currentPlayer) => {
  if (gameIsRuning) {
    if (currentPlayer === 'player1') {
      playerCharacters.player2.hurt(Math.round(Math.random() * 50));
      const player2HealthBar = document.getElementById('player2-healthBar');
      player2HealthBar.style = `width: ${playerCharacters.player2.health}%;`;
    }
    if (currentPlayer === 'player2') {
      playerCharacters.player1.hurt(Math.round(Math.random() * 50));
      const player1HealthBar = document.getElementById('player1-healthBar');
      player1HealthBar.style = `width: ${playerCharacters.player1.health}%;`;
    }
  }
};
