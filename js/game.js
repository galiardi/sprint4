import { PlayerCharacter } from './classes/PlayerCharacter.js';
import { getCard2 } from './functions/ui/getCard2.js';

const selectPokemon1Button = document.getElementById('selectPokemon1Button');
const selectPokemon2Button = document.getElementById('selectPokemon2Button');
const selectPokemonModal = new bootstrap.Modal('#selectPokemonModal'); // para manipular el modal de bootstrap con js
const searchForm = document.getElementById('searchForm');
const modalCardDiv = document.getElementById('modalCardDiv');
const playerDiv1 = document.getElementById('playerDiv1');
const playerDiv2 = document.getElementById('playerDiv2');
const startButton = document.getElementById('startButton');

// data
let gameIsRuning = false;
let currentSelector = undefined; // Para llevar registro de cuál pokemon se está seleccionando
let playerCharacters = {
  player1: {},
  player2: {},
};

// listeners

selectPokemon1Button.addEventListener('click', () => {
  currentSelector = 'player1';
  selectPokemonModal.show();
});

selectPokemon2Button.addEventListener('click', () => {
  currentSelector = 'player2';
  selectPokemonModal.show();
});

searchForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchName = searchInput.value.trim().toLowerCase();

  if (searchName === '') return;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchName}`
    );
    const data = await response.json();
    const pokemon = new PlayerCharacter(data);

    const card = getCard2(pokemon, '18rem', currentSelector);
    modalCardDiv.innerHTML = card;

    // Seleccionar
    const selectButton = document.getElementById(
      'selectPokemonModal-selectButton'
    );

    //listener para seleccionar un pokemon
    const selectListener = () => {
      if (currentSelector === 'player1') {
        playerDiv1.innerHTML = card;
        playerCharacters.player1 = pokemon;
      } else if (currentSelector === 'player2') {
        playerDiv2.innerHTML = card;
        playerCharacters.player2 = pokemon;
      }
      // esconde el modal y limpia datos
      selectPokemonModal.hide();
      modalCardDiv.innerHTML = '';
      searchInput.value = '';
      selectButton.removeEventListener('click', selectListener);
    };

    selectButton.addEventListener('click', selectListener);
  } catch (err) {
    console.log(err);
  }
});

startButton.addEventListener('click', () => {
  gameIsRuning = !gameIsRuning;
  gameIsRuning
    ? (startButton.textContent = 'jugando!')
    : (startButton.textContent = 'iniciar');
});

// listener agregado al objeto window para que pueda ser llamado directamente desde el atributo onclick de los botones abilityButton (Al importar game.js como type module las funciones no se agregan por defecto al objeto window)
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
