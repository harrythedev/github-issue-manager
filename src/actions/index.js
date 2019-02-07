export const getUserRepos = () => ({
  type: 'REPOS_FETCH_REQUESTED',
})

export const getRepoIssues = payload => ({
  type: 'ISSUES_FETCH_REQUESTED',
  payload,
})

export const onSort = (id, issues) => ({
  type: 'ON_SORT',
  id,
  issues,
})
