import React, { Fragment } from 'react'
import Button from '../components/Button'
import RepoList from './RepoList'
import IssueList from './IssueList'
const App = () => (
  <Fragment>
    <Button />
    <RepoList />
    <IssueList />
  </Fragment>
)
export default App
