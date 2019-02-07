import React from 'react'
import { connect } from 'react-redux'
import { getUserRepos } from '../actions'

import styled from 'styled-components'

const RoundButton = styled.button`
  border-radius: 25px;
  width: 350px;
  height: 50px;
`

const Button = ({ getUserRepos }) => (
  <RoundButton onClick={getUserRepos}>FETCH USER INFO</RoundButton>
)
const mapDispatchToProps = {
  getUserRepos,
}

export default connect(
  null,
  mapDispatchToProps,
)(Button)
