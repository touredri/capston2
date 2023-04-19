const commentCounter = (ul) => {
  const counter = document.querySelector('.com-count');
  if (!ul) {
    counter.innerText = 'Comments (0)';
  } else {
    counter.innerText = `Comments (${ul.children.length})`;
  }
};

module.exports = commentCounter;