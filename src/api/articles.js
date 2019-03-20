import { get, post } from '../utils/fetch'
import config from '../config'

// **RULES**
// All data in and out of the application should be formatted on API level
// This way the entire application can work with the same data
// This also prevents formatting on multiple levels
// **RULES**

/**
 * Get all articles from the server
 */
export const getAllArticles = async () => {
  return await get(config.getAllArticlesUrl)
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
