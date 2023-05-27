class App {
  #url;
  #nextUrl;
  #prevUrl;
  #pokemonList = [];
  #pokemonListById = {};

  constructor(url) {
    this.#url = url;
  }

  // getters
  get url() {
    return this.#url;
  }

  get nextUrl() {
    return this.#nextUrl;
  }

  get prevUrl() {
    return this.#prevUrl;
  }

  get pokemonList() {
    return this.#pokemonList;
  }

  get pokemonListById() {
    return this.#pokemonListById;
  }

  // setters
  set nextUrl(newUrl) {
    this.#nextUrl = newUrl;
  }

  set prevUrl(newUrl) {
    this.#prevUrl = newUrl;
  }

  set pokemonList(newPokemonList) {
    this.#pokemonList = newPokemonList;
    this.#pokemonListById = this.#pokemonList.reduce(
      (acc, pokemon) => ({ ...acc, [pokemon.id]: pokemon }),
      {}
    );
  }
}

export { App };
