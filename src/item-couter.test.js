const itemCounter = require('./item-counter.js');

describe('itemCounter', () => {
  it('updates the count when there are multiple items', async () => {
    // Mock the `fetch` API to return some sample data
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 1,
          title: 'Episode 1',
        },
        {
          id: 2,
          title: 'Episode 2',
        },
      ]),
    }));

    // Set up the initial DOM state
    document.body.innerHTML = '<div class="item-number"></div>';

    // Call our function
    await itemCounter();

    // Expect the text content of ".item-number" element to be "(2)"
    expect(document.querySelector('.item-number').textContent).toEqual('(2)');
  });

  it('updates the count when there are no items', async () => {
    // Mock the `fetch` API to return an empty array
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));

    // Set up the initial DOM state for the test
    document.body.innerHTML = '<div class="item-number"></div>';

    // Call our function
    await itemCounter();

    // Expect the text content of ".item-number" element to be "(0)"
    expect(document.querySelector('.item-number').textContent).toEqual('(0)');
  });
});
