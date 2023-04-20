const getMovies = async (movieAPI) => {
  const response = await fetch(movieAPI);
  const data = response.json();
  return data;
};

module.exports = getMovies;