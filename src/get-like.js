const getLike = async (likeAPI) => {
  const response = await fetch(likeAPI);
  const data = await response.json();
  return data;
};

module.exports = getLike;