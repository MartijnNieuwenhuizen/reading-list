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
  tags: JSON.parse(article.tags),
})

/**
 * Get all articles from the server
 */
export const getAllArticles = async () => {
  const response = await get(config.getAllArticlesUrl)
  console.log('response: ', response)
  return response
  // return response.map(decodeArticle)
}

/**
 * Post an article to the server
 * @param {Object} article
 */
export const postArticle = async article => {
  try {
    const url = config.postArticleUrl
    const articleAsString = JSON.stringify(article)
    const postAction = await post(url, articleAsString)

    return postAction
  } catch (err) {
    return err
  }
}
