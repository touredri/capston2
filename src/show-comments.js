const commentCounter = require('./comment-counter.js');

const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/be9WLm2cUd5ClZDWcc7I/comments';

const showComments = async (season, number) => {
  const ul = document.querySelector('.det-item');
  const counter = document.querySelector('.com-count');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  const showComm = await fetch(
    `${commentAPI}?item_id=${season}-${number}`,
  );
  const data = await showComm.json();
  try {
    data.forEach((comment) => {
      const li = document.createElement('li');
      li.innerText = `${comment.creation_date} - ${comment.username} : ${comment.comment}`;
      ul.appendChild(li);
    });
    counter.innerHTML = commentCounter(ul);
    document.querySelector('.com-det').appendChild(ul);
  } catch {
    const ul = document.querySelector('.det-item');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    const li = document.createElement('li');
    li.textContent = 'No Comment Found';
    li.classList.add('com-li');
    ul.appendChild(li);
    counter.innerHTML = commentCounter(null);
  }
};

module.exports = showComments;