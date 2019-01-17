import { get, post } from '../utils/fetch'
import config from '../config'

// **RULES**
// All data in and out of the application should be formatted on API level
// This way the entire application can work with the same data
// This also prevents formatting on multiple levels
// **RULES**

/**
 * Parse all JSON strings to create a useful object for the application
 * @param {Object} article
 */
const decodeArticle = article => ({
  ...article,
  tags: JSON.parse(article.tags)
})

/**
 * Encode article to prevent having multiple nesting levels
 * @param {Object} article
 */
const encodeArticle = article =>
  JSON.stringify({
    ...article,
    tags: JSON.stringify(article.tags)
  })

/**
 * Get all articles from the server
 */
export const getAllArticles = async () => {
  const response = await get(config.getAllArticlesUrl)

  return response.map(decodeArticle)
}

/**
 * Post an article to the server
 * @param {Object} article
 */
export const postArticle = async article => {
  try {
    await post(config.postArticleUrl, encodeArticle(article))
  } catch (err) {
    throw new Error(err)
  }
}
