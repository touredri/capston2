const showComments = require('./show-comments.js');

const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/be9WLm2cUd5ClZDWcc7I/comments';

const formSubmit = (season, number) => {
  const item = `${season}-${number}`;
  const user = document.querySelector('#comment-form #user-name').value;
  const commentText = document.querySelector('#comment-form #comment').value;
  const button = document.querySelector('#comment-form button');
  const form = document.querySelector('#comment-form');

  const commentObj = {
    item_id: item,
    username: user,
    comment: commentText,
  };
  fetch(commentAPI, {
    method: 'POST',
    body: JSON.stringify(commentObj),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response;
    }
    return Promise.reject(response);
  }).then(() => {
    button.innerText = 'Successfully added';
    form.reset();
    setTimeout(() => {
      button.innerText = 'Add Comment';
    }, 3000);
    showComments(season, number);
  }).catch(() => {
    form.reset();
    setTimeout(() => {
      button.innerText = 'Add Comment';
    }, 3000);
    button.innerText = 'Something went wrong.';
  });
};

module.exports = formSubmit;