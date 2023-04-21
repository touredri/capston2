const postLike = async (id, likeAPI) => {
  const response = await fetch(
    likeAPI,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

module.exports = postLike;