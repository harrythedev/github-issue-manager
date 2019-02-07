import React, { Component, Fragment } from 'react'
import Button from '../components/Button'
import RepoList from './RepoList'
import IssueList from './IssueList'
import { GlobalStyle } from '../theme/globalStyle'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    background: palevioletred;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Button />
        <Wrapper>
          <RepoList />
          <IssueList />
        </Wrapper>
      </Fragment>
    )
  }
}
export default App
