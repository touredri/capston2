const commentCounter = (ul) => {
  if (!ul) {
    return '<h3>Comments (0)</h3>';
  }
  return `<h3>Comments (${ul.children.length})</h3>`;
};

module.exports = commentCounter;