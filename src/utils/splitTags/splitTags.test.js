import splitTags from './splitTags'

test("bail out if the input isn't an string", () => {
  const input = ''
  const actual = splitTags(input)

  expect(actual).toEqual([])
})

test('returns array with four values if the string contains 4 words', () => {
  const input = 'one two three four'
  const actual = splitTags(input)

  expect(actual).toEqual(['one', 'two', 'three', 'four'])
})

test('returns array with four values if the string contains 4 words and one "."', () => {
  const input = 'one two three four .'
  const actual = splitTags(input)

  expect(actual).toEqual(['one', 'two', 'three', 'four'])
})

test('returns array with four values if the last character is an " "', () => {
  const input = 'one two three four '
  const actual = splitTags(input)

  expect(actual).toEqual(['one', 'two', 'three', 'four'])
})
