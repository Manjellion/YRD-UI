const setWidth = require('./setWidth');

test("Total carousel width should be -1100", () => {
    expect(setWidth(1100, 2200)).toBe(-1100);
});