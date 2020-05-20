const arth = require('./index.js')


test('adds 1 and 2 to give 3', () => {
    expect(arth.sum(1,2)).toBe(3);
})