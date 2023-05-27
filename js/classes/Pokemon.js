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

export { Pokemon };
