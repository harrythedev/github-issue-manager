import React from 'react'
import { connect } from 'react-redux'
import RepoItem from '../components/RepoItem'
import { getRepoIssues } from '../actions'

const RepoList = ({ repos, getRepoIssues, isLoading }) => (
  <div>
    <h3>Repositories:</h3>
    <ul>
      {isLoading && <div>Loading....</div>}
      {repos &&
        repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} getRepoIssues={getRepoIssues} />
        ))}
    </ul>
  </div>
)
const mapStateToProps = state => ({
  repos: state.repositoryReducer.repos,
  isLoading: state.repositoryReducer.loading,
})

const mapDispatchToProps = {
  getRepoIssues,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList)
