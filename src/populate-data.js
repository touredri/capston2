const displayLike = require('./display-like.js');

const populateData = (data, likes, list) => {
  let count = 1;
  data.forEach((item) => {
    if (item.image) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = item.image.medium;
      img.alt = `${item.name}`;

      const div = document.createElement('div');
      div.classList.add('row');
      div.innerHTML = `<h2>${
        item.name
      }<h2/> <svg class='my-svg' id="${count}" xmlns='http://www.w3.org/2000/svg' height='38' fill='red' viewBox='0 96 960 960' width='38'><path d='m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z'/></svg><div class="likes-count">${displayLike(
        count, likes,
      )} Likes</div> </div>`;

      const btn = document.createElement('button');
      btn.classList.add('comment-button');
      btn.id = count;
      btn.innerText = 'Comments';

      li.append(img);
      li.append(div);
      li.append(btn);

      list.appendChild(li);
      count += 1;
    }
  });
};

module.exports = populateData;