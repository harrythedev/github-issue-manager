import React from 'react'
import RepoItem from './RepoItem'
import renderer from 'react-test-renderer'

it('renders ', () => {
  const repo = {
    id: 169527722,
    full_name: 'harrythedev/github-issue-manager',
  }
  const tree = renderer.create(<RepoItem repo={repo} />).toJSON()
  expect(tree).toMatchSnapshot()
})
