const forbiddenTerms = ['.', ',', ';', ':', '/', '?', '!', '', ' ']
const removeForbiddenTerms = item => !forbiddenTerms.includes(item)

/**
 * @param {String} tags
 * @returns {Array}
 */
export default tags => {
  if (typeof tags !== 'string') return []

  return tags.split(' ').filter(removeForbiddenTerms)
}
