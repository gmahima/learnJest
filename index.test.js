const sum = require('./index')
test('adds 1 and 2 to give 3', () => {
    expect(sum(1,2)).toBe(3);
})