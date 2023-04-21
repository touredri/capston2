const getSingle = async (id, seasonAPI) => {
  const response = await fetch(
    `${seasonAPI}?season=1&number=${id}`,
  );
  const data = await response.json();
  return data;
};

module.exports = getSingle;