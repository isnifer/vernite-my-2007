const { describe, test, expect } = global
const { dolboebify } = require('../')

describe('dolboebify', () => {
  test('should convert a string like in my 2007', () => {
    const string = 'Testing the best fckn ever tool in the world'
    const expectedString = 'TeStInG tHe BeSt FcKn EvEr ToOl In ThE wOrLd'
    expect(dolboebify(string)).toBe(expectedString)
  })
})
