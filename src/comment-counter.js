const commentCounter = (ul) => {
  const counter = document.querySelector('.com-count');
  if (!ul) {
    counter.innerHTML = '<h3>Comments (0)</h3>';
  } else {
    counter.innerHTML = `<h3>Comments (${ul.children.length})</h3>`;
  }
};

module.exports = commentCounter;