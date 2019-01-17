class ArticleBuilder {
  constructor() {
    this.result = null
  }

  createInstance() {
    this.result = {
      title: '',
      href: '',
      authorName: '',
      readingTimeInMinutes: null,
      tags: [],
      date: '',
      read: null
    }

    return this
  }

  addTitle(title) {
    this.result.title = title
    return this
  }

  addHref(href) {
    this.result.href = href
    return this
  }

  addAuthorName(authorName) {
    this.result.authorName = authorName
    return this
  }

  addReadingTimeInMinutes(readingTimeInMinutes) {
    this.result.readingTimeInMinutes = readingTimeInMinutes
    return this
  }

  addTags(tags) {
    this.result.tags = tags
    return this
  }

  addDate(date) {
    this.result.date = date
    return this
  }

  addRead(read) {
    this.result.read = read
    return this
  }

  getResult() {
    return this.result
  }
}

export default ArticleBuilder
