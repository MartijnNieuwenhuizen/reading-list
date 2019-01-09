const initialState = { articles: [] }

export default (state = initialState, action = {}) => {
  console.log('action: ', action)
  console.log('action.type: ', action.type)
  switch (action.type) {
    case 'ADD_SINGLE_ARTICLE': {
      return { articles: [action.payload.content, ...state.articles] }
    }

    case 'ADD_BULK_ARTICLE': {
      return { articles: [...action.payload, ...state.articles] }
    }

    default: {
      state = initialState
      return { ...state }
    }
  }
}
