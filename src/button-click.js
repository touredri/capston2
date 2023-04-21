const getSingle = require('./get-single.js');
const showComments = require('./show-comments.js');

const contModal = document.querySelector('.modal-flex');
const imgPlace = document.querySelector('.modal-content img');
const modal = document.getElementById('myModal');
const seasonAPI = 'https://api.tvmaze.com/shows/1/episodebynumber';

let season;
let number;

const buttonClick = async (ev) => {
  if (ev.target.localName === 'button') {
    while (contModal.firstChild) {
      contModal.removeChild(contModal.firstChild);
    }
    const data = await getSingle(ev.target.id, seasonAPI);
    modal.style.display = 'block';
    const img = data.image.medium;
    imgPlace.src = img;

    season = data.season;
    number = data.number;

    const { name, type } = data;

    const rating = data.rating.average;

    const nm = document.querySelector('.modal-content h2');
    nm.innerHTML = `${name}`;

    const seasonP = document.createElement('p');
    seasonP.innerHTML = `Season - ${season}`;

    const episodeP = document.createElement('p');
    episodeP.innerHTML = `Episode - ${number}`;

    const typeP = document.createElement('p');
    typeP.innerHTML = `Type - ${type}`;

    const ratingP = document.createElement('p');
    ratingP.innerHTML = `Rating - ${rating}`;

    contModal.appendChild(seasonP);
    contModal.appendChild(episodeP);
    contModal.appendChild(typeP);
    contModal.appendChild(ratingP);
  }
  localStorage.clear();
  const sea = parseInt(season, 10);
  const num = parseInt(number, 10);

  const id = `${sea}-${num}`;
  localStorage.setItem('item', id);
  showComments(season, number);

  return { season, number };
};

module.exports = buttonClick;