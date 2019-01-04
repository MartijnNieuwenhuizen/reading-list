import allArticlesData from '../../data/allArticlesData'

const initialState = { articles: allArticlesData }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SINGLE_ARTICLE': {
      return { articles: [action.payload.content, ...state.articles] }
    }

    default: {
      state = initialState
      return { ...state }
    }
  }
}
