const issueReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ISSUES_FETCH_REQUESTED':
      return { ...state, currentIssue: action.payload.id, loading: true }
    case 'ISSUES_FETCH_SUCCEEDED':
      return { ...state, [action.id]: action.issues, loading: false }
    case 'ISSUES_FETCH_FAILED':
      return { ...state, loading: false }
    case 'ON_SORT':
      return { ...state, [action.id]: action.issues }
    default:
      return state
  }
}
export default issueReducer
