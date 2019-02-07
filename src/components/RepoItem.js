import React from 'react'
import styled from 'styled-components'

const RepoItem = ({ repo, getRepoIssues }) => (
  <li>
    <div
      onClick={() => getRepoIssues({ fullName: repo.full_name, id: repo.id })}
    >
      {repo.full_name}
    </div>
  </li>
)

export default RepoItem
