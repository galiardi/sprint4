function insertStatsChart(htmlElementId, pokemon) {
  const labels = pokemon.stats.map((stat) => stat.name);
  const data = pokemon.stats.map((stat) => stat.value);

  const myChart = new Chart(htmlElementId, {
    type: 'polarArea',
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            '#d5def5',
            '#8594e4',
            '#6643b5',
            '#430f58',
            '#00aba9',
            '#2b5797',
            '#e8c3b9',
            '#1e7145',
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: `Estadísticas de ${pokemon.name}`,
      },
    },
  });
}

export { insertStatsChart };
