const sum = require('./sum');

test('adds 1 + 2 to eqyal 3', () => {
    expect(sum(1, 2)).toBe(3);
});