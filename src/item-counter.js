const itemCounter = async () => {
  const getMovies = async () => {
    const response = await fetch(' https://api.tvmaze.com/seasons/1/episodes');
    const data = response.json();
    return data;
  };

  const data = await getMovies();
  const counts = document.querySelector('.item-number');

  counts.textContent = `(${data.length})`;
};
export default itemCounter;
