const fetchReadingTime = async url => {
  const fetchUrl = `https://article-length-generator.herokuapp.com?targetUrl=${url}`

  try {
    const readingTimeInMinutes = await fetch(fetchUrl)
    const jsonResponse = await readingTimeInMinutes.json()

    return await jsonResponse.amountOfWords
  } catch {
    return 0
  }
}

export default async url => {
  const averageWordsAMinute = 200
  const amountOfWords = await fetchReadingTime(url)

  return String(Math.round(amountOfWords / averageWordsAMinute))
}
