import ArticleBuilder from './ArticleBuilder'
import splitTags from '../splitTags/splitTags'
import getReadingTimeInMinutes from '../getReadingTimeInMinutes'

const formatTags = tags => {
  const tagsList = splitTags(tags)
  return tagsList.map(tag => ({
    href: '/',
    label: tag
  }))
}

const createDate = () => new Date()

export default async (title, author, url, tags) => {
  const readingTimeInMinutes = await getReadingTimeInMinutes(url)
  const formattedTags = formatTags(tags)
  const currentDate = createDate()
  const read = false

  return new ArticleBuilder()
    .createInstance()
    .addTitle(title)
    .addHref(url)
    .addAuthorName(author)
    .addReadingTimeInMinutes(readingTimeInMinutes)
    .addTags(formattedTags)
    .addDate(currentDate)
    .addRead(read)
    .getResult()
}
