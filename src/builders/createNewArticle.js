// @TODO: provide tag href the correct path and structure

export default (title, authorName, href, tags, readingTimeInMinutes = '?') => {
  return {
    title,
    href,
    authorName,
    readingTimeInMinutes,
    tags: tags.map(tag => ({
      href: '/',
      label: tag
    }))
  }
}
