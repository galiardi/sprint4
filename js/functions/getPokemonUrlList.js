async function getPokemonUrlList(url) {
  const response = await fetch(url);
  const data = await response.json();
  const urlList = data.results.map((result) => result.url);
  return { urlList, next: data.next, prev: data.previous };
}

export { getPokemonUrlList };
