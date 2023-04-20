const postLike = async (id, likeAPI) => {
  // eslint-disable-next-line no-unused-vars
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
};

module.exports = postLike;