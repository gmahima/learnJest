const arth = require('./index.js')


test('subtracts 1 from 2 to give 1', () => {
    expect(arth.diff(1,2)).toBe(1);
})