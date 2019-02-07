const repositoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REPOS_FETCH_REQUESTED':
      return { ...state, loading: true }
    case 'REPOS_FETCH_SUCCEEDED':
      return { ...state, repos: action.data, loading: false }
    default:
      return state
  }
}
export default repositoryReducer
