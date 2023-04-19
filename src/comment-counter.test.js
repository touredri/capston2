/* eslint-disable no-unused-vars */
const commentCounter = require('./comment-counter.js');

const ul = document.createElement('ul');

afterEach(() => {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});

test('0 comment', () => {
  expect(commentCounter(ul)).toBe('<h3>Comments (0)</h3>');
});

test('0 comment', () => {
  const li = document.createElement('li');
  expect(commentCounter(ul)).toBe('<h3>Comments (0)</h3>');
});

test('1 comment', () => {
  const li = document.createElement('li');
  ul.appendChild(li);
  expect(commentCounter(ul)).toBe('<h3>Comments (1)</h3>');
});

test('1 comment', () => {
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  ul.appendChild(li1);
  expect(commentCounter(ul)).toBe('<h3>Comments (1)</h3>');
});

test('2 comments', () => {
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  ul.appendChild(li1);
  ul.appendChild(li2);
  expect(commentCounter(ul)).toBe('<h3>Comments (2)</h3>');
});

test('n comments', () => {
  ul.innerHTML = '<li>1</li><li>2</li><li>3</li>';
  expect(commentCounter(ul)).toBe('<h3>Comments (3)</h3>');
});