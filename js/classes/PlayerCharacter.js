class PlayerCharacter extends Pokemon {
  #health = 100;
  #isAlive = true;

  constructor(pokemon) {
    super(pokemon);
  }

  get health() {
    return this.#health;
  }

  get isAlive() {
    return this.#isAlive;
  }

  set health(value) {
    const result = this.#health - value;
    if (result <= 0) {
      this.#isAlive = false;
      this.#health = 0;
    } else {
      this.#health = result;
    }
  }
}

export { PlayerCharacter };