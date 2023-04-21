const displayLike = (id, likes) => {
  const foundObj = likes.find((obj) => obj.item_id === id);
  if (foundObj) {
    return foundObj.likes;
  }
  return 'Object not found!';
};
module.exports = displayLike;