import './index.css';
import populateData from './populate-data.js';
import itemCounter from './item-counter.js';
import Image from './logo.png';
import getMovies from './get-movies.js';
import getLike from './get-like.js';
import postLike from './post-like.js';
import buttonClick from './button-click.js';
import formSubmit from './form-submit.js';

const movieAPI = ' https://api.tvmaze.com/seasons/1/episodes';
const likeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3CLv413c1ifs1Ya2iHvU/likes/';

const likes = await getLike(likeAPI);
let season;
let number;

const data = await getMovies(movieAPI);
const list = document.querySelector('.list');

populateData(data, likes, list);

const svgs = document.querySelectorAll('.my-svg');

svgs.forEach((svg) => {
  const postId = parseInt(svg.id, 10);
  const id = parseInt(svg.id, 10);
  let isLiked = localStorage.getItem(`post_${postId}_isLiked`) === 'true';
  svg.classList.toggle('active', isLiked);

  svg.addEventListener('click', async () => {
    isLiked = !isLiked;
    svg.classList.toggle('active', isLiked);
    localStorage.setItem(`post_${postId}_isLiked`, isLiked.toString());

    // send request to server
    if (isLiked) {
      await postLike(postId, likeAPI);
      document.location.reload();
    } else {
      const courrentLike = likes[id].likes;
      const newLike = courrentLike - 1;
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(
        `${likeAPI}?item_id=${svg.id}&likes=${newLike}`,
        {
          method: 'PATCH',
        },
      ).then((response) => response.json());
    }
  });
});

const modal = document.getElementById('myModal');

list.addEventListener('click', async (ev) => {
  const res = buttonClick(ev);
  season = (await res).season;
  number = (await res).number;
});

const span = document.getElementsByClassName('close')[0];
span.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const form = document.querySelector('#comment-form');

form.addEventListener('click', (ev) => {
  ev.preventDefault();
  if (ev.target.localName === 'button') {
    formSubmit(season, number);
  }
});

document.querySelector('#logo-image').src = Image;
itemCounter();
