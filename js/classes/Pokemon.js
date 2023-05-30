class Pokemon {
  #id;
  #name;
  #height;
  #weight;
  #imgUrl;
  #abilities;
  #stats;

  constructor({ id, name, height, weight, sprites, abilities, stats }) {
    this.#id = id;
    this.#name = name;
    this.#height = height;
    this.#weight = weight;
    this.#imgUrl = sprites.front_default;
    this.#abilities = abilities;
    this.#stats = stats;
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
  get stats() {
    return this.#stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    }));
  }
}

export { Pokemon };
