export const addSingleArticle = content => ({
  type: 'ADD_SINGLE_ARTICLE',
  payload: { content }
})

export const addBulkArticle = content => ({
  type: 'ADD_BULK_ARTICLE',
  payload: content
})
